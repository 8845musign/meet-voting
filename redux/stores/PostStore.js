import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { combineReducers } from 'redux-immutable'
import { Map } from 'immutable'


import { reducer } from '../modules/Admin/Post'
import EventModel from '../../models/Event'

const event = new EventModel()
const initialState = Map({
  event: event
})

const rootReducer = combineReducers({
  event: reducer
})

export const initStore = () => {
  return createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware))
}
