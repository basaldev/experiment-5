import page from "page"

import { getLogger } from "domain/logger"
import { updateCurrentPage } from "domain/store/reducers/main"
import { getUser } from 'domain/store/selectors/main';

type Context = { params: { name: string } }
type OnRoute = (ctx: Context) => void

const logger = getLogger("Middleware/router")

function authMiddleware(ctx, next) {
  const userId = getUser().id;
  if (userId) {
    logger.info('User authenticated', userId);
    next();
  } else {
    logger.info('User not authenticated');
    page('/login');
  }
}
function homeRouter(onRoute: OnRoute) {
  page("/", authMiddleware, onRoute)
}
function loginRouter(onRoute: OnRoute) {
  page('/login', onRoute);
}
function secondRouter(onRoute: OnRoute) {
  page("/2", authMiddleware, onRoute)
}
function thirdRouter(onRoute: OnRoute) {
  page("/3", authMiddleware, onRoute)
}
function fourthRouter(onRoute: OnRoute) {
  page("/4", authMiddleware, onRoute)
}

export default function startRouters() {
  homeRouter(ctx => {
    logger.debug("Home route")
    updateCurrentPage({ name: "HOME_PAGE", value: 0 })
  })
  loginRouter(ctx => {
    logger.debug('Login route');
    updateCurrentPage({ name: 'LOGIN_PAGE', value: null });
  });
  secondRouter(ctx => {
    logger.debug("Document route")
    updateCurrentPage({ name: "SECOND_PAGE", value: 1 })
  })
  thirdRouter(ctx => {
    logger.debug("Document route")
    updateCurrentPage({ name: "THIRD_PAGE", value: 2 })
  })
  fourthRouter(ctx => {
    logger.debug("Document route")
    updateCurrentPage({ name: "FOURTH_PAGE", value: 3 })
  })

  page()
}

export function navigate(route: string, event?: any) {
  if (event) event.preventDefault();
  page(route)
}
