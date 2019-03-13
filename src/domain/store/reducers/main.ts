/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { getLogger } from 'domain/logger';
import { store, State, Page, Item, DetailItem } from 'domain/store/main';

const logger = getLogger('State');

export function updateCurrentPage(currentPage: Page) {
  logger.debug(`Update current page ${currentPage.name}`);
  return store.swap(oldState => ({ ...oldState, currentPage }));
}

