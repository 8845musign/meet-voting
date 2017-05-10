import { Record } from 'immutable'

const EventRecord = Record({
  title: '',
  date: '',
  minimumCharge: 0,
  description: ''
})

export default class EventModel extends EventRecord {
  save (data) {
  }
}

