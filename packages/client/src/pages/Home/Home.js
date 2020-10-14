import {
  Box,
} from "grommet/index";
import React from "react";
import {useMutation, useQuery} from '@apollo/client';
import {issueQuery} from '../../graphql/queries/issue';
import {loginMutation} from '../../graphql/mutations/user';

export const Home = () => {
  const { loading, error, data } = useQuery(issueQuery);

  const TitleArray = () => {
    if (data) {
      return (
        data.issues.map(el => <p key={el.id}>{el.title}</p>)
      )
    }
  }
  return (
    <Box flex align="center" justify="center">
      <Box align="center" justify="center" pad="xsmall" margin="xsmall">
          {TitleArray()}
      </Box>
    </Box>
  );
};
