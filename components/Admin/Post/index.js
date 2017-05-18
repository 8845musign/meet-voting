import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { update, save } from '../../../redux/modules/Admin/Post'

const mapStateToProps = function (state) {
  return {
    event: state.get('event')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: bindActionCreators(update, dispatch),
    save: bindActionCreators(save, dispatch)
  }
}

const onSubmit = (event, save) => e => {
  e.preventDefault()
  save({title: event.get('title')})
}

export default connect(mapStateToProps, mapDispatchToProps)(({ event, update, save }) => {
  return (
    <form onSubmit={onSubmit(event, save)}>
      <div>
        <label htmlFor='title'>Event Title</label>
        <input
          type='text'
          id='title'
          value={event.get('title')}
          onChange={(e) => { update({ title: e.target.value }) }}
          required
        />
      </div>

      <div>
        <label htmlFor='date'>Date</label>
        <input
          type='date'
          id='date'
          value={event.get('date')}
          onChange={(e) => { update({ date: e.target.value }) }}
          required
        />
      </div>

      <div>
        <label htmlFor='description'>Description</label>
        <textarea
          id='description'
          value={event.get('description')}
          onChange={(e) => { update({ description: e.target.value }) }}
        />
      </div>

      <button type='submit'>Save</button>
    </form>
  )
})
