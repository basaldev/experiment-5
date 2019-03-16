import {
  Grid,
  GridList,
  Button,
  Step,
  Paper,
  StepContent,
  StepLabel,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stepper
} from '@material-ui/core';
import * as React from 'react';
import { css } from 'emotion';

export function FileCard(tile: any) {
  return (
    <Grid item xs={12}>
      <Card className={css`display: flex`}>
          <CardContent className={css`flex: 1 0 auto;`}>
            <Typography component="h5" variant="h5">
            {tile.value} Depression
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
            Last scanned {tile.date}
            </Typography>
          </CardContent>
          <CardMedia
            className={css`width: 151px; `}
            image={tile.img}
          />
      </Card>
    </Grid>)
    }
