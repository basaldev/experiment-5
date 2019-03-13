/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import page from 'page';

import { getLogger } from 'domain/logger';
import { updateCurrentPage } from 'domain/store/reducers/main';

type Context = { params: { name: string } };
type OnRoute = (ctx: Context) => void;

const logger = getLogger('Middleware/router');

function homeRouter(onRoute: OnRoute) {
  page('', onRoute);
}
export default function startRouters() {
  homeRouter(ctx => {
    logger.debug('Home route');
    updateCurrentPage({ name: 'HOME_PAGE' });
  });

  page();
}

export function detailRoute(name: string) {
  return `/detail/${name}`;
}
