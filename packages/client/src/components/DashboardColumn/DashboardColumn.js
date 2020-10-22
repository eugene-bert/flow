import {useQuery} from '@apollo/client';
import {columnQuery} from '../../graphql/queries/column';
import React, {Fragment} from 'react';
import {Droppable} from 'react-beautiful-dnd';
import {ColumnAddIssueModal} from '../../modals/ColumnAddIssueModal/ColumnAddIssueModal';
import ColumnDelete from '../ColumnDelete/ColumnDelete';
import {DashboardIssue} from '../DashboardIssue/DashboardIssue';
import styled from 'styled-components';


const Container = styled.div`
   min-width: 280px;
   margin: 8px;
   border: 1px solid lightgrey;
   border-radius: 2px;
`;
const Title = styled.h3`
   padding: 8px;
`;
const TaskList = styled.div`
   padding: 8px;
`;

export const DashboardColumn = (props) => {
  const { data, loading, error } = useQuery(columnQuery, {
    variables: { id: props.columnId },
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
                return <DashboardIssue issueId={el} key={index} index={index}/>
              })}
            </TaskList>
            <ColumnAddIssueModal columnId={props.columnId} columnName={data.column.title} dahsboard={data.column.dashboard}/>
            <ColumnDelete/>
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </Fragment>
  ) : null
};