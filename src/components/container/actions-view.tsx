import * as React from 'react';
import { Grid,
    Chip,
    Divider,
    List,
    ListItem,
    ListItemText,
    Button,
    GridListTile,
    CardContent,
    Card,
    CardActions,
    Typography,
    CardActionArea,
    CardMedia } from '@material-ui/core';
import TickIcon from '@material-ui/icons/Check';
import { css } from 'emotion';
import { SuggestionCard } from 'components/presentational/suggestion-card';
export function ActionsView(props: any) {
  return (
    <>
    <Typography variant="headline" className={css`padding: 24px;`}>Your Suggestion</Typography>
    <Grid container direction="column" spacing={8} className={css`
      padding: 16px;
    `}>

      {props.mySuggestions.map(tile => (<Grid item>{SuggestionCard(tile)}</Grid>))}

    </Grid>
    </>
  )
}