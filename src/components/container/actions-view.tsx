import * as React from "react"
import { Grid, Typography } from "@material-ui/core"
import { css } from "emotion"
import { SuggestionCard } from "components/presentational/suggestion-card"
export function ActionsView(props: any) {
  return (
    <>
      <Typography
        variant="headline"
        className={css`
          padding: 24px;
        `}
      >
        Suggestions
      </Typography>
      <Grid
        container
        direction="column"
        spacing={8}
        className={css`
          padding: 16px;
        `}
      >
        {props.mySuggestions.map(tile => <Grid item>{SuggestionCard(tile)}</Grid>)}
      </Grid>
    </>
  )
}
