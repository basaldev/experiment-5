import * as React from "react"
import {
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
import { onSliderChange, questionareStatusChanged } from "domain/middleware/user"
import { css } from "emotion"
import { Camera } from "react-feather";

export function SimpleSlider(props: any) {
  return (
    <Slider
      step={1}
      min={1}
      max={10}
      value={props.value || 5.5}
      aria-labelledby="label"
      onChange={props.handleChange}
    />
  )
}

function getStepContent(thisStep, onSlide) {
  return (
    <>
      <Card>
        <CardHeader title={thisStep.title} />
        <CardMedia
          image={thisStep.img}
          className={css`
            height: 33vh;
          `}
        />
        <CardContent>{thisStep.description}</CardContent>
      </Card>
      <div
        className={css`
          margin: 40px 0 0;
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

  render() {
    const { questionnaire } = this.props
    const steps = this.props.questionnaire.map(q => q.title)
    const { activeStep } = this.state;
    const activeStepValue = questionnaire[activeStep] && questionnaire[activeStep].value;
    const isFirst = activeStep === 0;
    const isLast = activeStep === steps.length - 1;
      return (
        <div className={css`overflow: scroll; padding-bottom: 10vh;`}>
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
              key={item.id}
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
}
