import fetch from 'isomorphic-fetch'

import EventModel from '../../../models/Event'

// Actions
const UPDATE = 'redux/modules/Admin/Post/UPDATE'
const SAVE = 'redux/modules/Admin/Post/SAVE'
const SAVE_SUCCESS = 'redux/modules/Admin/Post/SAVE_SUCCESS'
const SAVE_ERROR = 'redux/modules/Admin/Post/SAVE_ERROR'

export const update = (data) => ({
  type: UPDATE,
  data
})

export const save = data => {
  return {
    type: SAVE,
    data
  }
}

// middleware
export const EventSaveMiddleawre = store => next => action => {
  if (action.type !== SAVE) next(action)

  const { dispatch } = store

  fetch('/api/event/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: action.data.title
    })
  })
  .then((res) => {
    if (res.statusCode === 200) {
      dispatch({
        type: SAVE_SUCCESS
      })
    }
  })
  .catch(() => {
    dispatch({
      type: SAVE_ERROR
    })
  })
}

const event = new EventModel()

export const reducer = (state = {event}, action) => {
  switch (action.type) {
    case UPDATE:
      const newEvent = state.merge(action.data)

      return newEvent

    case SAVE_SUCCESS:
      return state

    case SAVE_ERROR:
      return state

    default:
      return state
  }
}

