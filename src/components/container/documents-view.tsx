import * as React from 'react';
import {
  Grid,
  GridList
} from '@material-ui/core';
import { css } from 'emotion';
import { FileCard } from 'components/presentational/file-card';


export function DocumentsView(props:any) {
  return (
    <Grid container direction="row">
        <GridList cellHeight={160} className={css`
        max-width: 100%;
        height: 90vh;
      `} cols={3}>
          {props.documents.map(tile => FileCard(tile))}
        </GridList>
      </Grid>
      )
}