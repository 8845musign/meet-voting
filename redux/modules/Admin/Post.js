import EventModel from '../../../models/Event'

// Actions
const UPDATE = 'redux/modules/Admin/Post/UPDATE'

export const update = (data) => ({
  type: UPDATE,
  data
})

export const save = () => (dispatch) => {
  // return dispatch => {
  //   store.event
  //     .save()
  // }
}

const event = new EventModel()

export const reducer = (state = {event}, action) => {
  switch (action.type) {
    case UPDATE:
      console.log(action)
      console.log(state)
      const newEvent = state.merge(action.data)

      return newEvent
    default:
      return state
  }
}
