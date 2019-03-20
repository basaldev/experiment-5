import * as React from "react"
import { Grid, Typography } from "@material-ui/core"
import { css } from "emotion"
import { SuggestionCard, SuggestionListItem } from "components/presentational/suggestion-card"

const NUMBER_OF_DISPLAY_MAIN = 2;

export function ActionsView(props: any) {
  const mainItems = props.mySuggestions.slice(0, NUMBER_OF_DISPLAY_MAIN);
  const otherItems = props.mySuggestions.slice(NUMBER_OF_DISPLAY_MAIN);
  return (
    <>
      <Typography
        variant="headline"
        className={css`
          padding: 24px;
        `}
      >
        Suggestions for you
      </Typography>
      <Grid
        container
        direction="column"
        spacing={8}
        className={css`
          padding: 16px;
        `}
      >
        {mainItems.map(tile => <Grid item>{SuggestionCard(tile)}</Grid>)}
      </Grid>
      <Typography
        variant="title"
        className={css`
          padding: 24px;
        `}
      >
        Other suggestions
      </Typography>
      <Grid
        container
        direction="column"
        spacing={8}
        className={css`
          padding: 16px;
        `}
      >
        {otherItems.map(tile => <Grid item>{SuggestionListItem(tile)}</Grid>)}
      </Grid>
    </>
  )
}
