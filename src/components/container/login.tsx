import * as React from 'react';
import { Typography, Button, Grid, Avatar } from '@material-ui/core';
import { css } from 'emotion';
import { onChangeCurrentUser } from 'domain/middleware/user';

function SampleUser({ user }) {
  return (
    <Grid item xs={12} key={user.name}>
      <Grid
        container
        alignItems="center"
        justify="center"
        className={css`
          margin-bottom: 16px;
        `}
      >
      <Grid item>
        <Avatar
        className={css`
        && {
          color: #fff;
          height: 60px;
          width: 60px;
        }
        `}
        ><img className={css`
          height: 100%;
          width: auto;
        `
        } src={user.avatar}></img></Avatar>
        </Grid>
        <Grid item xs={12}>
        <Button
          variant="contained"
          onClick={() => onChangeCurrentUser(user)}
          className={css`
          && {
            margin:8px auto;
            display:block;
          }
          `}
        >
          {user.name}
        </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export const Login = ({
  sampleUsers,
}: {
  sampleUsers: Array<{ id: string; name: string; avatar: string; age: number }>;
}) => {
  return (
    <Grid container justify="center" alignItems="center" alignContent="center">
      <Grid
        item
        className={css`
          padding-top: 20vh;
        `}
      >
        <Typography
          align="center"
          variant="body2"
          className={css`
            margin-bottom: 24px !important;
          `}
        >
          Select Sample User
        </Typography>
        {sampleUsers.map(user => <SampleUser key={user.id} user={user} />)}
      </Grid>
    </Grid>
  );
};
