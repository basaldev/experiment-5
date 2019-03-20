import * as React from "react"
import { Grid, Typography } from "@material-ui/core"
import { css } from "emotion"
import { SuggestionCard, SuggestionListItem } from "components/presentational/suggestion-card"
import difference from 'lodash.difference';



function showSuggestions(props: any): Array<any> {
  //TODO move to user
  const { questionnaire, mySuggestions } = props
  const { tag: suggestionTag } = mySuggestions

  // Questionnaire is finished, so decide which suggestions to show the user
  // based on their questionnaire responses
  let suggest = []
  // questionnaire[5] ~ trust; mySuggestions[0] ~ loneliness
  if (questionnaire[5].value < 4) suggest.push(mySuggestions[0])
  // questionnaire[0] ~ eating; mySuggestions[1] ~ nutrition
  if (questionnaire[0].value < 6) suggest.push(mySuggestions[1])
  // questionnaire[6] ~ ease of breathing; mySuggestions[2] ~ music
  if (questionnaire[6].value < 5) suggest.push(mySuggestions[2])
  // questionnaire[2] ~ sun; mySuggestions[3] ~ vitamins
  if (questionnaire[2].value < 5) suggest.push(mySuggestions[3])
  // questionnaire[3] ~ drink alcohol; mySuggestions[4] ~ brain
  if (questionnaire[3].value > 7) suggest.push(mySuggestions[4])
  return suggest;
};

function yourSuggestions(suggest:Array<any>, questionnaireFinished:boolean){
  if (!questionnaireFinished) {
    return <p>Please complete your Profile to get suggestions!</p>
  }
  return suggest.map(tile => (
    <Grid key={tile.tag} item>
      {SuggestionCard(tile)}
    </Grid>
  ))
}

export function ActionsView(props: any) {
  // const mainItems = props.mySuggestions.slice(0, NUMBER_OF_DISPLAY_MAIN);
  // const otherItems = props.mySuggestions.slice(NUMBER_OF_DISPLAY_MAIN);
  const filteredSuggestions = showSuggestions(props);
  const otherItems = props.mySuggestions.filter(e => !filteredSuggestions.includes(e));
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
        && {
          padding: 16px;
          ${filteredSuggestions.length === 0 ? 'display:none': ''}
        }
        `}
      >
        {yourSuggestions(filteredSuggestions, props.questionnaireFinished)}
      </Grid>
      <Typography
        variant="title"
        className={css`
        && {
          padding: 24px;
          ${filteredSuggestions.length === 0 ? 'display:none': ''}
        }
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
