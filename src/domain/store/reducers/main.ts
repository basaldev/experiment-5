import { getLogger } from "domain/logger"
import { store, Page } from "domain/store/main"

const logger = getLogger("State")

export function updateCurrentPage(currentPage: Page) {
  logger.debug(`Update current page ${currentPage.name}`)
  return store.swap(oldState => ({ ...oldState, currentPage }))
}

export function updateInputText(inputText: string) {
  return store.swap(oldState => ({ ...oldState, inputText }))
}

export function updatesessionAttributes(sessionAttributes: any) {
  logger.debug(`Update sessionAttributes `, sessionAttributes)
  return store.swap(oldState => ({
    ...oldState,
    sessionAttributes
  }))
}

export function updateChat(message: any) {
  return store.swap(oldState => ({
    ...oldState,
    messages: [...oldState.messages, message]
  }))
}

export function updateDiagnosis(newDianosis: any) {
  return store.swap(oldState => ({
    ...oldState,
    dianosis: [...oldState.dianosis, newDianosis]
  }))
}

export function updateMyDoctor(newDoctor: any) {
  return store.swap(oldState => ({
    ...oldState,
    mySuggestions: [...oldState.mySuggestions, newDoctor]
  }))
}

export function updateScan(scan: any) {
  return store.swap(oldState => ({
    ...oldState,
    scans: [...oldState.scans, scan]
  }))
}

export function updateQuestionaireStatus(isComplete: boolean) {
  return store.swap(oldState => ({
    ...oldState,
    questionnaireFinished: isComplete
  }))
}

export function updateQuestionaire(questions: any) {
  return store.swap(oldState => ({
    ...oldState,
    questions
  }))
}

export function updateCurrentUser(user: { id: string; name: string; avatar: string; age: number }) {
  return store.swap(oldState => ({
    ...oldState,
    user,
  }));
}
