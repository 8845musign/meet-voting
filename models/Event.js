import { Record } from 'immutable'

const EventRecord = Record({
  title: '',
  date: '',
  description: ''
})

export default class EventModel extends EventRecord {
  save (data) {
  }
}

