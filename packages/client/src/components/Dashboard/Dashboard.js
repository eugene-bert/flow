import React, { Fragment } from "react";
import { useQuery } from "@apollo/client";
import { columnQuery } from "../../graphql/queries/column";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { ColumnAddIssueModal } from "../../modals/ColumnAddIssueModal/ColumnAddIssueModal";
import { oneIssueQuery } from "../../graphql/queries/issue";
import {dashboardQuery} from '../../graphql/queries/dashboard';
import {Box} from 'grommet/index';
import ColumnCreate from '../ColumnCreate/ColumnCreate';
import DashboardDelete from '../DashboardDelete/DashboardDelete';
import ColumnDelete from '../ColumnDelete/ColumnDelete';
import styled from 'styled-components';
import {DashboardColumn} from '../DashboardColumn/DashboardColumn';

const Container = styled.div`
  display: flex;
`;


export const Dashboard = (props) => {
  const {data, loading, error} = useQuery(dashboardQuery, {variables: {id: props.dashboardId}})

  const onDragEnd = result => {
    const { source, destination, draggableId } = result;


    // dropped outside the list
    if (!destination) {
      return;
    }

    console.log(draggableId, source, destination)


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