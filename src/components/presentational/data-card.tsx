import * as React from "react"
import { Grid, Paper } from "@material-ui/core"
import { css } from "emotion"

export function DataCard(tile: any) {
  return (
    <Grid item xs={6}>
      <Paper
        key={tile.title}
        className={css`
          && {
            display: flex;
            background: ${tile.color};
            text-align: center;
          }
        `}
      >
        <Grid
          container
          direction="column"
          justify="center"
          spacing={8}
          className={css`
            padding: 8px;
          `}
        >
          <Grid item>{tile.title}</Grid>
          <Grid item>{tile.value}</Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}
