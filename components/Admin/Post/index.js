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
  save({
    title: event.get('title'),
    date: event.get('date'),
    description: event.get('description')
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(({ event, update, save }) => {
  return (
    <div className='container'>
      <form onSubmit={onSubmit(event, save)}>
        <div className='form-group'>
          <label htmlFor='title'>Event Title</label>
          <input
            className='form-control'
            type='text'
            id='title'
            value={event.get('title')}
            onChange={(e) => { update({ title: e.target.value }) }}
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='date'>Date</label>
          <input
            className='form-control'
            type='date'
            id='date'
            value={event.get('date')}
            onChange={(e) => { update({ date: e.target.value }) }}
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <textarea
            className='form-control'
            id='description'
            value={event.get('description')}
            onChange={(e) => { update({ description: e.target.value }) }}
          />
        </div>

        <button className='btn btn-primary' type='submit'>Save</button>
      </form>
    </div>

  )
})
