import {useMutation, useQuery} from '@apollo/client';
import {oneIssueQuery} from '../../graphql/queries/issue';
import {Draggable} from 'react-beautiful-dnd';
import React, {Fragment, useState} from 'react';
import styled from 'styled-components';
import {Box, Button, Heading, Layer} from 'grommet/index';
import {Paragraph, Text} from 'grommet';
import {updateIssue} from '../../graphql/mutations/issue';

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
  const [update] = useMutation(updateIssue)
  const [show, setShow] = useState(false);
  const id = props.issueId;

  const submitHandle = () => {
    let title = document.getElementsByClassName("issueEditHeading")[0]
        .innerHTML,
      description = document.getElementsByClassName("issueEditDescription")[0]
        .innerHTML;
    update({ variables: { id, title, description }}).then((data) => {
      console.log(data);
    });
  };

  return data ? (
    <Draggable draggableId={props.issueId} index={props.index} key={props.issueId} >
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={() => setShow(true)}
        >
            <Text>{data.issue.title}</Text>
            {show && (
              <Layer
                onEsc={() => {
                  setShow(false);
                }}
                onClickOutside={() => {
                  setShow(false);
                }}
              >
                <Box flex align="center" justify="center" width="medium" pad="medium">
                  <Box align="center" justify="center">
                    <Heading level={4} margin="none">
                      <strong
                        contentEditable={true}
                        suppressContentEditableWarning={true}
                        className="issueEditHeading"
                      >
                        {data.issue.title}
                      </strong>
                    </Heading>
                    <Box gap="xsmall">
                      <p
                        contentEditable={true}
                        suppressContentEditableWarning={true}
                        className="issueEditDescription"
                      >
                        {data.issue.description}
                      </p>
                    </Box>
                    <Box justify="center" direction="row" gap="medium">
                      <Button
                        primary
                        label="Save issue"
                        onClick={() => submitHandle()}
                      />
                    </Box>
                  </Box>
                </Box>
              </Layer>
            )}
        </Container>
      )}
    </Draggable>
  ) : null
}
