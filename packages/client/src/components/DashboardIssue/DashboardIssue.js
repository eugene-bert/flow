import {useQuery} from '@apollo/client';
import {oneIssueQuery} from '../../graphql/queries/issue';
import {Draggable} from 'react-beautiful-dnd';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`;

export const DashboardIssue = (props) => {
  const { data, loading, error } = useQuery(oneIssueQuery, {
    variables: { id: props.issueId },
  });

  return data ? (
    <Draggable draggableId={props.issueId} index={props.index} key={props.issueId}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {data.issue.title}
        </Container>
      )}
    </Draggable>
  ) : null
}
