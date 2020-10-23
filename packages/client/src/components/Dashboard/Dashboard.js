import React, {Fragment} from 'react';
import {useMutation, useQuery, useReactiveVar} from '@apollo/client';
import { DragDropContext } from "react-beautiful-dnd";
import {dashboardQuery} from '../../graphql/queries/dashboard';
import ColumnCreate from '../ColumnCreate/ColumnCreate';
import DashboardDelete from '../DashboardDelete/DashboardDelete';
import styled from 'styled-components';
import {DashboardColumn} from '../DashboardColumn/DashboardColumn';
import {dashboardColumnIssuesVar} from '../../cache';
import { updateColumn } from "../../graphql/mutations/column";

const Container = styled.div`
  display: flex;
`;


export const Dashboard = (props) => {
  const {data, loading, error} = useQuery(dashboardQuery, {variables: {id: props.dashboardId}})
  const dashboardData = useReactiveVar(dashboardColumnIssuesVar)
  const [update] = useMutation(updateColumn);

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
      {sourceColumn: droppableSource.droppableId, sourceIssues: sourceClone},
      {destinationColumn:droppableDestination.droppableId, destinationIssues: destClone}
    ];
    return result;
  };

  const onDragEnd = result => {
    const { source, destination, draggableId } = result;
    const destinationColumnData = dashboardData.find(el => el[0] === destination.droppableId)[1]
    const sourceColumnData = dashboardData.find(el => el[0] === source.droppableId)[1]

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        sourceColumnData,
        source.index,
        destination.index
      );

      update({ variables: { id: source.droppableId,issues: items }}).then((data) => {
        console.log(data);
      });

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

      update({ variables: { id: sourceColumn,issues: sourceIssues }}).then((data) => {
        console.log(data);
      });

      update({ variables: { id: destinationColumn,issues: destinationIssues }}).then((data) => {
        console.log(data);
      });

    }
  }

  return data ?  (
    <Fragment>
      <Fragment>
        <ColumnCreate dashboardId={props.dashboardId}/>
        <DashboardDelete dashboardId={props.dashboardId}/>
      </Fragment>
      <DragDropContext onDragEnd={onDragEnd}>
        <Container>
          {data.dashboard.columns.map((el, index) => {
            return <DashboardColumn key={index} columnId={el}/>
          })}
        </Container>
      </DragDropContext>
    </Fragment>
  ) : null  ;
};