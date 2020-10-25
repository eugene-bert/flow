import React, { Fragment, useEffect, useState } from "react";
import {
  useMutation,
  useQuery,
} from "@apollo/client";
import { DragDropContext } from "react-beautiful-dnd";
import { dashboardQuery } from "../../graphql/queries/dashboard";
import ColumnCreate from "../ColumnCreate/ColumnCreate";
import DashboardDelete from "../DashboardDelete/DashboardDelete";
import styled from "styled-components";
import { DashboardColumn } from "../DashboardColumn/DashboardColumn";
import { updateColumn } from "../../graphql/mutations/column";
import DashboardUsers from "../DashboardUsers/DashboardUsers";
import { columnQuery } from "../../graphql/queries/column";
import { client } from "../../index";

const Container = styled.div`
  display: flex;
  overflow: auto;
`;

const DashboardBar = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const Dashboard = (props) => {
  const { data, loading, error, refetch } = useQuery(dashboardQuery, {
    variables: { id: props.dashboardId },
    fetchPolicy: 'cache-and-network'
  });
  const [update] = useMutation(updateColumn);
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    let columnArray = [];
    client
      .query({ query: dashboardQuery, variables: { id: props.dashboardId } })
      .then((data) => {
        data.data.dashboard.columns.map((el) =>
          client
            .query({ query: columnQuery, variables: { id: el } })
            .then((result) => {
              columnArray.push([
                result.data.column.id,
                result.data.column.issues,
              ])
              setColumns(columnArray)
            })
        );
      });
  }, []);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = [
      { sourceColumn: droppableSource.droppableId, sourceIssues: sourceClone },
      {
        destinationColumn: droppableDestination.droppableId,
        destinationIssues: destClone,
      },
    ];
    return result;
  };
  const onDragEnd = async (result) => {
    const { source, destination, draggableId } = result;
    const destinationColumnData = columns.find(
      (el) => el[0] === destination.droppableId
    )[1];
    const sourceColumnData = columns.find(
      (el) => el[0] === source.droppableId
    )[1];
    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(sourceColumnData, source.index, destination.index);

      await update({ variables: { id: source.droppableId, issues: items } }).then(
        (data) => {
          console.log(data);
          refetch()
        }
      );
    } else {
      const result = move(
        sourceColumnData,
        destinationColumnData,
        source,
        destination
      );

      let sourceColumn = result[0].sourceColumn,
        sourceIssues = result[0].sourceIssues,
        destinationColumn = result[1].destinationColumn,
        destinationIssues = result[1].destinationIssues;

      await update({ variables: { id: sourceColumn, issues: sourceIssues } }).then(
        (data) => {
          console.log(data);
          refetch()
        }
      );

      await update({
        variables: { id: destinationColumn, issues: destinationIssues },
      }).then((data) => {
        console.log(data);
        refetch()
      });
    }
  };
  return data ? (
    <Fragment>
      <Fragment>
        <DashboardBar>
          <ColumnCreate refetch={refetch} dashboardId={props.dashboardId} />
          <DashboardDelete refetch={refetch} dashboardId={props.dashboardId} />
          <DashboardUsers
            dashboardId={props.dashboardId}
            users={data.dashboard.users}
          />
        </DashboardBar>
      </Fragment>
      <Container>
        <DragDropContext onDragEnd={onDragEnd}>
          {data.dashboard.columns.map((el, index) => {
            return (
              <DashboardColumn refetch={refetch} key={index} columnId={el} />
            );
          })}
        </DragDropContext>
      </Container>
    </Fragment>
  ) : null;
};
