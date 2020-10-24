import React, {Fragment, useState} from 'react';
import {Box, Text, TextInput} from 'grommet';
import { Button, Heading, Layer } from "grommet/index";
import styled from "styled-components";
import {useMutation, useQuery, useReactiveVar} from '@apollo/client';
import {searchUserById} from '../../graphql/queries/user';
import {shareDashboard, unShareDashboard} from '../../graphql/mutations/dashboard';
import {FormTrash} from 'grommet-icons';
import {myEmailVar} from '../../cache';
import {FormClose} from 'grommet-icons/index';

const ButtonStyle = styled.div`
  margin: 5px;
`;

const UserList = (props) => {
  const { data, loading, error, refetch } = useQuery(searchUserById, {variables: {id: props.userId}});
  const [unShare] = useMutation(unShareDashboard);
  const email = useReactiveVar(myEmailVar)

  const handleDelete = () => {
    unShare({variables: {email: data.searchUserById.email, dashboardId: props.dashboardId}}).then(data => {
      console.log(data)
    }).catch(e => {
      console.log(e)
    })
  }

  return data ? (
    <Fragment>
      <Text> {data.searchUserById.email}
        {data.searchUserById.email !== email ? (
          <FormTrash size='medium' onClick={() => handleDelete()}/>
        ) :  null}
      </Text>
    </Fragment>
  ) : null;
};

const AddUser = (props) => {
  const [value, setValue] = React.useState('');
  const [share] = useMutation(shareDashboard);

  const handleSubmit = () => {
    share({variables: {email: value, dashboardId: props.dashboardId}}).then(data => {
      console.log(data)
    }).catch(e => {
      console.log(e)
    })
  }

  return (
    <Fragment>
        <TextInput
          placeholder="User email"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        <Button label="Add user" margin="small" onClick={() => handleSubmit()}/>
    </Fragment>
  )
}

const DashboardUsers = (props) => {
  const [show, setShow] = useState(false);

  return (
    <ButtonStyle>
      <Fragment>
        <Button label="Users" onClick={() => setShow(true)} />
        {show && (
          <Layer
            onEsc={() => setShow(false)}
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
                onClick={() =>  setShow(false)}
              />
            </Box>
            <Box fill align="center" justify="center" width="medium" pad="large">
              <Box align="center" justify="center">
                <Heading level={3} margin="none">
                  <strong>Users</strong>
                </Heading>
                <Box gap="xsmall">
                  {props.users.map((el, index) => {
                    return <UserList key={index} userId={el} dashboardId={props.dashboardId}/>
                  })}
                </Box>
                <AddUser dashboardId={props.dashboardId}/>
              </Box>
            </Box>
          </Layer>
        )}
      </Fragment>
    </ButtonStyle>
  );
};

export default DashboardUsers;
