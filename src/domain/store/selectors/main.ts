import { store } from 'domain/store/main';
import { State, Item, Page } from 'domain/store/main';

export function state(): State {
  return store.deref();
}

export function currentPage(): Page {
  return state().currentPage;
}
export function getMessages(): Array<any> {
  return state().messages;
}

export function getDocuments(): Array<any> {
  return state().documents;
}