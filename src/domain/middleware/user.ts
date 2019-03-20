import { getLogger } from "domain/logger"
import {
  updateChat,
  updateQuestionaireStatus,
  updateMyDoctor,
  updateInputText,
  updateQuestionaire,
  updatesessionAttributes,
  updateDiagnosis,
  updateScan,
  updateCurrentUser
} from "domain/store/reducers/main"
import { getDoctors } from "domain/store/selectors/main"
import { DianosesCard } from "components/presentational/dianoses-card"
import { Bubble } from "components/presentational/bubble"
import page from "page"

const logger = getLogger("Middleware/user")

export function saveDoctor(doctor: object) {
  updateMyDoctor(doctor)
  page("/4")
}

export function questionareStatusChanged(isCompleted: boolean) {
  updateQuestionaireStatus(isCompleted)
  // page("/2")
}

export function onSliderChange(questions, step, value) {
  const newQuestions = (questions[step].value = value)
  updateQuestionaire(newQuestions)
}

function normalizeLexResponse(message: string) {
  return JSON.parse(message)
}

export function saveScan(scan: object) {
  page("/")
  return updateScan(scan)
}

export function saveDianoses(issue: object) {
  //find doctor
  const doctor = getDoctors()[0]
  const newDiagnosis = {
    issue,
    doctor
  }
  updateDiagnosis(newDiagnosis)
}

//create react app
export function showResponse(lexResponse) {
  if (lexResponse.dialogState === "Fulfilled") {
    updateChat({
      content: DianosesCard(normalizeLexResponse(lexResponse.message), true),
      showSpeaker: true,
      direction: "row",
      speaker: "BOT"
    })
  } else {
    if (lexResponse.message) {
      updateChat({
        content: Bubble(lexResponse.message),
        showSpeaker: true,
        direction: "row",
        speaker: "BOT"
      })
    }
    if (lexResponse.dialogState === "ReadyForFulfillment") {
      console.log("Ready For Fulfillment")
      // TODO:  show slot values
    } else {
      console.log(lexResponse.dialogState)
    }
  }
}

export function pushChat(textString, lexruntime, sessionAttributes) {
  const params = {
    botAlias: "$LATEST",
    botName: "Tere",
    inputText: textString,
    userId: "tere-thursday",
    sessionAttributes: sessionAttributes
  }
  updateChat({
    content: Bubble(textString),
    showSpeaker: true,
    direction: "row-reverse",
    speaker: "USER"
  })
  lexruntime.postText(params, function(err, data) {
    if (err) {
      console.log(err, err.stack)
    }
    if (data) {
      // capture the sessionAttributes for the next cycle
      updatesessionAttributes(data.sessionAttributes)
      // show response and/or error/dialog status
      showResponse(data)
    }
    //Clean value
  })
}

export function onKeyPressUpdateInputText(e) {
  updateInputText(e.target.value)
  return e.target
}

export function scrollbottom(container) {
  container.scrollTop = container.scrollHeight
}

export function onChangeCurrentUser(user) {
  console.log(user);
  updateCurrentUser(user);
  page('/');
}
