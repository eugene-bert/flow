import {useQuery, useReactiveVar} from '@apollo/client';
import {columnQuery} from '../../graphql/queries/column';
import React, {Fragment, useState} from 'react';
import {Droppable} from 'react-beautiful-dnd';
import {ColumnAddIssueModal} from '../../modals/ColumnAddIssueModal/ColumnAddIssueModal';
import ColumnDelete from '../ColumnDelete/ColumnDelete';
import {DashboardIssue} from '../DashboardIssue/DashboardIssue';
import styled from 'styled-components';
import {dashboardColumnIssuesVar} from '../../cache';
import {Box} from 'grommet';


const Container = styled.div`
   min-width: 280px;
   margin: 8px;
   border: 1px solid lightgrey;
   border-radius: 15px;
`;
const Title = styled.h3`
   padding: 8px;
`;
const TaskList = styled.div`
   padding: 8px;
`;

export const DashboardColumn = (props) => {
  const { data, loading, error, refetch } = useQuery(columnQuery, {
    variables: { id: props.columnId }
  });

  return data ? (
    <Fragment>
      <Droppable droppableId={props.columnId}>
        {(provided, snapshot) => (
          <Container
            ref={provided.innerRef}
          >
            <Title>{data.column.title}</Title>
            <TaskList>
              {data.column.issues.map((el,index) => {
                return <DashboardIssue refetch={refetch} columnId={props.columnId} issueId={el} key={index} index={index}/>
              })}
            </TaskList>
            <Box align="center" justify="center">
              <ColumnAddIssueModal refetch={refetch} columnId={props.columnId} columnName={data.column.title} dahsboard={data.column.dashboard}/>
              <ColumnDelete/>
            </Box>
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </Fragment>
  ) : null
};