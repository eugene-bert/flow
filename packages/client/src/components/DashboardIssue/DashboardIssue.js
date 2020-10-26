import {useMutation, useQuery} from '@apollo/client';
import {oneIssueQuery} from '../../graphql/queries/issue';
import {Draggable} from 'react-beautiful-dnd';
import React, {Fragment, useEffect, useState} from 'react';
import styled from 'styled-components';
import {Box, Button, Heading, Layer} from 'grommet/index';
import {Paragraph, Text} from 'grommet';
import {updateIssue, deleteIssue } from '../../graphql/mutations/issue';
import {FormClose} from 'grommet-icons/index';

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
    fetchPolicy: "network-only"
  });
  const [update] = useMutation(updateIssue)
  const [issueDelete] = useMutation(deleteIssue)
  const [show, setShow] = useState(false);
  const id = props.issueId;

  const submitHandle = () => {
    let title = document.getElementsByClassName("issueEditHeading")[0]
        .innerHTML,
      description = document.getElementsByClassName("issueEditDescription")[0]
        .innerHTML;
    update({ variables: { id, title, description }}).then((data) => {
      props.updateData()
      props.refetch()
      setShow(false);
    });
  };

  const removeIssue = () => {
    issueDelete({ variables: { columnId: props.columnId, issueId: id  }}).then((data) => {
      props.updateData()
      props.refetch()
      setShow(false);
    });
  }

  useEffect(() => {
    props.updateData()
  }, [])

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
                className="modal"
                onEsc={() => {
                  setShow(false);
                }}
                onClickOutside={() => {
                  setShow(false);
                }}
              >
                <Box
                  tag="header"
                  justify="end"
                  align="center"
                  direction="row"
                >
                  <Button
                    icon={<FormClose />}
                    onClick={() => setShow(false)}
                    // TODO: check why is not working
                  />
                </Box>
                <Box fill align="center" justify="center" width="medium" pad="medium">
                  <Box align="center" justify="center">
                    <Heading level={6} margin="none">
                      Click to edit
                    </Heading>
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
                      <Button
                        primary
                        label="Delete issue"
                        onClick={() => removeIssue()}
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
