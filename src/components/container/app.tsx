import React from "react"
import { currentPage, getQuestionnaireFinished, getmySuggestions, getQuestionnaire, getScans } from "domain/store/selectors/main"
import { Grid } from "@material-ui/core"
import { Navbar } from "components/presentational/navbar"
import { ActionsView } from "components/container/actions-view"
import { CameraView } from "components/container/camera-view"
import { QuestionnaireView } from "components/container/questionnaire-view"
import { navigate } from "domain/middleware/router"
import { css } from "emotion"
import Fab from "@material-ui/core/Fab"
import { Activity } from "react-feather"

export function App() {
  const content = (pageName => {
    switch (pageName) {
      case "HOME_PAGE":
        return (
          <QuestionnaireView questionnaire={getQuestionnaire()} questionnaireFinished={getQuestionnaireFinished()} scans={getScans()} />
        )
      case "SECOND_PAGE":
        return <ActionsView mySuggestions={getmySuggestions()} />
      case "THIRD_PAGE":
        return <CameraView />
      default:
        return <p>Page not found</p>
    }
  })(currentPage().name)

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        className={css`
          height: 90vh;
          overflow: scroll;
        `}
      >
        {content}
      </Grid>
      <Grid item xs={12}>
        <Navbar
          routes={[
            e => {
              navigate("/", e)
            },
            e => {
              navigate("/2", e)
            }
          ]}
        />
      </Grid>
      <Fab
        color="primary"
        aria-label="Brain Activity"
        className={css`
      && {
      position:absolute;
      bottom: 5vh;
      right: 0;
      left: 0;
      margin 0 auto;
      }
    `}
        onClick={e => {
          navigate("/3", e)
        }}
      >
        <Activity />
      </Fab>
    </Grid>
  )
}
