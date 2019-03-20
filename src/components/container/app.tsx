import React from "react"
import {
  currentPage,
  getQuestionnaireFinished,
  getmySuggestions,
  getQuestionnaire,
  getCampaigns,
  getScans,
  getSampleUsers
} from "domain/store/selectors/main"
import { Grid } from "@material-ui/core"
import { Navbar } from "components/presentational/navbar"
import { ActionsView } from "components/container/actions-view"
import { CameraView } from "components/container/camera-view"
import { QuestionnaireView } from "components/container/questionnaire-view"
import { ProfileView } from "components/container/profile-view"
import { SocialView } from "components/container/social-view"
import { Login } from "components/container/login";
import { navigate } from "domain/middleware/router"
import { css } from "emotion"

export function App() {
  const content = (pageName => {
    switch (pageName) {
      case "HOME_PAGE":
        if (getQuestionnaireFinished()) {
          return (
            <ProfileView
              questionnaire={getQuestionnaire()}
              scans={getScans()}
            />
          );
        }
        return (
          <QuestionnaireView
            questionnaire={getQuestionnaire()}
          />
        );
      case "SECOND_PAGE":
        return (
          <ActionsView
            questionnaire={getQuestionnaire()}
            questionnaireFinished={getQuestionnaireFinished()}
            mySuggestions={getmySuggestions()}
          />
        )
      case "THIRD_PAGE":
        return <CameraView />
      case "FOURTH_PAGE":
        return <SocialView campaigns={getCampaigns()} />
      case "LOGIN_PAGE":
        return <Login sampleUsers={getSampleUsers()} />;
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
          value={currentPage().value}
          routes={[
            e => {
              navigate("/", e)
            },
            e => {
              navigate("/2", e)
            },
            e => {
              navigate("/4", e)
            }
          ]}
        />
      </Grid>
    </Grid>
  )
}
