/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { getLogger } from 'domain/logger';
import { store, State, Page, Item } from 'domain/store/main';

const logger = getLogger('State');

export function updateCurrentPage(currentPage: Page) {
  logger.debug(`Update current page ${currentPage.name}`);
  return store.swap(oldState => ({ ...oldState, currentPage }));
}

export function updateInputText(inputText: string) {
  return store.swap(oldState => ({ ...oldState, inputText }));
}
export function updatesessionAttributes(sessionAttributes:any){
  logger.debug(`Update sessionAttributes `, sessionAttributes);
  return store.swap(oldState => ({
    ...oldState,
    sessionAttributes
  }));
}

export function updateChat(message:any){
  return store.swap(oldState => ({
    ...oldState,
    messages: [
    ...oldState.messages,
    message
  ]}));
}

export function updateDiagnosis(newDianosis:any){
  return store.swap(oldState => ({
    ...oldState,
    dianosis: [
    ...oldState.dianosis,
    newDianosis
  ]}));
}

export function updateMyDoctor(newDoctor:any) {
  return store.swap(oldState => ({
    ...oldState,
    mySuggestions: [
    ...oldState.mySuggestions,
    newDoctor
  ]}));
}
export function updateScan(scan:any) {
  return store.swap(oldState => ({
    ...oldState,
    scans: [
    ...oldState.scans,
    scan
  ]}));
}
export function updateQuestionaireStatus(isComplete:boolean){
  return store.swap(oldState => ({
    ...oldState,
    questionnaireFinished: isComplete
  }));
}

export function updateQuestionaire(questions: any) {
  return store.swap(oldState => ({
    ...oldState,
    questions
  }));
}