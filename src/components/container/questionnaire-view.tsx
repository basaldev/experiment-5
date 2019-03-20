import * as React from "react"
import {
  Grid,
  Button,
  Card,
  CardHeader,
  CardContent,
  Typography,
  MobileStepper,
  Zoom,
  CardMedia,
} from "@material-ui/core"
import Slider from "@material-ui/lab/Slider"
import { DataCard } from "components/presentational/data-card"
import { onSliderChange, questionareStatusChanged } from "domain/middleware/user"
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
      {questionnaire.map(tile => DataCard(tile))}
    </Grid>
  );
}

export function SimpleSlider(props: any) {
  return (
    <Slider
      step={1}
      min={1}
      max={10}
      value={props.value}
      aria-labelledby="label"
      onChange={props.handleChange}
    />
  )
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

function getStepContent(thisStep, onSlide) {
  return (
    <>
      <Card>
        <CardHeader title={thisStep.title} />
        <CardMedia
          image={thisStep.img}
          className={css`
            height: 150px;
          `}
        />
        <CardContent>{thisStep.description}</CardContent>
      </Card>
      <div
        className={css`
          margin 40px 0 0;
        `}
      >
        <SimpleSlider
          handleChange={onSlide}
          value={thisStep.value}
        />
        {thisStep.value !== null &&
          <div
            className={css`
              display: flex;
              padding-top: 10px;
              justify-content: center;
            `}
          >
            <Typography variant="h5">{thisStep.value} {thisStep.unit}</Typography>
          </div>}
      </div>
    </>
  )
}

export class QuestionnaireView extends React.Component {
  props: any
  state = {
    activeStep: 0
  }

  handleNext = () => {
    if (this.state.activeStep === this.props.questionnaire.length - 1) {
      navigate("/2");
      questionareStatusChanged(true)
    }
    this.setState((state: any) => ({
      activeStep: state.activeStep + 1
    }))
  }

  handleBack = () => {
    this.setState((state: any) => ({
      activeStep: state.activeStep - 1
    }))
  }

  handleReset = () => {
    questionareStatusChanged(false)
    this.setState({
      activeStep: 0
    })
  }

  updatePhoto = () => {
    navigate('/3');
  }

  render() {
    const { questionnaire, questionnaireFinished, scans } = this.props
    const steps = this.props.questionnaire.map(q => q.title)
    const { activeStep } = this.state;
    const activeStepValue = questionnaire[activeStep] && questionnaire[activeStep].value;
    const isFirst = activeStep === 0; 
    const isLast = activeStep === steps.length - 1;

    if (!questionnaireFinished) {
      return (
        <div>
          <Typography
            variant="headline"
            className={css`
              padding: 24px;
            `}
          >
            Your Profile
          </Typography>
          {questionnaire.map((item, index) => (
            <div
              className={css`
                display: ${index === activeStep ? 'block' : 'none'}
              `}
            >
              <Zoom
                in={index === activeStep}
                key={item.id}
              >
                <Card
                  className={css`
                    &&& {
                      box-shadow: none;
                    }
                  `}
                >
                  <CardContent>
                    {getStepContent(item, (e, v) => {
                      onSliderChange(questionnaire, index, v)
                    })}
                  </CardContent>
                </Card>
              </Zoom>
            </div>
          ))}
          <MobileStepper
            variant="dots"
            steps={steps.length}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                variant="contained"
                color={isLast ? 'secondary' : 'primary'}
                onClick={this.handleNext}
                disabled={activeStepValue === null}
              >
                {isLast ? 'Finish' : 'Next'}
              </Button>
            }
            backButton={
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={this.handleBack}
                disabled={isFirst}
              >
                Back
              </Button>
            }
            className={css`
              position: absolute;
              bottom: 10vh;
              width: 100%;
              box-sizing: border-box;
            `}
          />
        </div>
      );
    }

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
