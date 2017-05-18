import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux-immutable'
import { logger } from 'redux-logger'
import { Map } from 'immutable'

import { reducer, EventSaveMiddleawre } from '../modules/Admin/Post'
import EventModel from '../../models/Event'

const event = new EventModel()
const initialState = Map({
  event: event
})

const rootReducer = combineReducers({
  event: reducer
})

export const initStore = () => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      logger,
      EventSaveMiddleawre
    )
  )
}
