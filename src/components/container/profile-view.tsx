import * as React from "react"
import {
  Grid,
  Button,
} from "@material-ui/core"
import { DataCard } from "components/presentational/data-card"
import { questionareStatusChanged } from "domain/middleware/user"
import { css } from "emotion"
import { FileCard } from "components/presentational/file-card"
import { navigate } from "domain/middleware/router";

export function Profile(questionnaire: any, scans: any, updatePhoto) {
  return (
    <Grid
      container
      alignItems="stretch"
      className={css`
        && {
          max-width: 100%;
          margin: 0px;
        }
      `}
      spacing={16}
    >
      {FileCard(scans[scans.length - 1], updatePhoto)}
      <Grid container>
        <Grid
          item
          xs={12}
          className={css`
            padding-bottom: 20px;
            text-align: center;
          `}
        >
          {suggestionButton()}
        </Grid>
      </Grid>
      {questionnaire.map(tile => DataCard(tile))}
    </Grid>
  );
}

function suggestionButton() {
  return (
    <Button
      variant="outlined"
      onClick={(e) => {
        navigate('/2', e);
      }}
    >
      See suggestions
    </Button>
  );
}

function resetButton() {
  return (
    <Button
      variant="outlined"
      onClick={() => {
        questionareStatusChanged(false)
      }}
    >
      Update Answers
    </Button>
  );
}

export class ProfileView extends React.Component {
  props: any
  state = {
    activeStep: 0
  }

  updatePhoto = () => {
    navigate('/3');
  }

  render() {
    const { questionnaire, scans } = this.props;

    return (
      <div>
        {Profile(questionnaire, scans, this.updatePhoto)}
        <Grid container>
          <Grid
            item
            xs={12}
            className={css`
              padding: 20px 0;
              text-align: center;
            `}
          >
            {resetButton()}
          </Grid>
        </Grid>
      </div>
    )
  }
}
