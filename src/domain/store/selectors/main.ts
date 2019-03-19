import { store } from "domain/store/main"
import { State, Item, Page } from "domain/store/main"

export function state(): State {
  return store.deref()
}

export function currentPage(): Page {
  return state().currentPage
}

export function getMessages(): Array<any> {
  return state().messages
}

export function getInputText(): string {
  return state().inputText
}

export function getSessionAttributes(): any {
  return state().sessionAttributes
}

export function getDocuments(): Array<any> {
  return state().documents
}

export function getDianosis(): Array<any> {
  return state().dianosis
}

export function getDoctors(): Array<any> {
  return state().doctors
}

export function getmySuggestions(): Array<any> {
  return state().mySuggestions
}

export function getQuestionnaire(): Array<any> {
  return state().questionnaire
}

export function getQuestionnaireFinished(): boolean {
  return state().questionnaireFinished
}

export function getScans(): Array<any> {
  return state().scans
}
