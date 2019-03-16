import * as React from 'react';
import {
  Grid,
  GridList,
  Button,
  Step,
  Paper,
  StepContent,
  StepLabel,
  Typography,
  Stepper
} from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';
import { DataCard } from 'components/presentational/data-card';
import { onSliderChange, questionareStatusChanged } from 'domain/middleware/user';
import { css } from 'emotion';
import { FileCard } from 'components/presentational/file-card';
import page from 'page';

export function Profile(questionnaire: any, questionnaireFinished: boolean, scans: any) {
  if (questionnaireFinished) {
    return (<Grid
  container
  alignItems="stretch"
  className={css`
  && {
    max-width: 100%;
    margin: 0px;
  }
  `} spacing={16}>
      {questionnaire.map(tile => DataCard(tile))}
      {FileCard(scans[scans.length - 1])}
    </Grid>)
  }
}


export function SimpleSlider(props: any) {
  return (
    <Slider
      max={10}
      value={props.value}
      aria-labelledby="label"
      onChange={props.handleChange}
    />
  );
}
function resetButton(questionnaireFinished){
  if(questionnaireFinished){
    return (
      <Button variant="outlined" onClick={() => {questionareStatusChanged(false)} }>Update Answers</Button>
    )
  }
}
function getStepContent(questionnaire, step) {
  const thisStep = questionnaire[step];
  return (<>
    <p>{thisStep.description}</p>
    <SimpleSlider handleChange={(e, v) => { onSliderChange(questionnaire, step, v) }} value={thisStep.value} />
  </>
  )
}

const button = css`
  margin-top: 8px;
  margin-right: 8px;

`
const actionsContainer = css`
  margin-bottom: 16px;
  margin-top: 16px;
  float:left;
`
const resetContainer = css`
  padding: 16px;
`

export class QuestionnaireView extends React.Component {
  props: any;
  state = {
    activeStep: 0,
  };

  constructor(props) {
    super(props);
  }
  handleNext = () => {
    if (this.state.activeStep === this.props.questionnaire.length - 1) {
      page('/2');
      questionareStatusChanged(true);
    }
    this.setState((state: any) => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState((state: any) => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    questionareStatusChanged(false);
    this.setState({
      activeStep: 0,
    });
  };


  render() {
    // const { classes } = this.props;
    const steps = this.props.questionnaire.map(q => q.title);
    const { activeStep } = this.state;

    return (
      <div>
        <Typography variant="headline" className={css`padding: 24px;`}>Your Profile</Typography>
        {Profile(this.props.questionnaire, this.props.questionnaireFinished, this.props.scans)}
        {resetButton(this.props.questionnaireFinished)}
        <Stepper activeStep={activeStep} orientation="vertical" className={css` && { ${this.props.questionnaireFinished ? 'display:none' : ''}};`}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                {getStepContent(this.props.questionnaire, index)}
                <div className={actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={button}
                    >
                      Back
                      </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={resetContainer}>
            <Typography>All steps completed - you're finished</Typography>
            <Button onClick={this.handleReset} className={button}>
              Reset
              </Button>
          </Paper>
        )}
      </div>
    );
  }
}