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

export default connect(mapStateToProps, mapDispatchToProps)(({ event, update }) => {
  return (
    <form>
      <div>
        <label htmlFor='title'>Event Title</label>
        <input type='text' id='title' value={event.get('title')} onChange={(e) => { update({ title: e.target.value }) }} />
      </div>

      <div>
        <label htmlFor='date'>Date</label>
        <input type='date' id='date' value={event.get('date')} onChange={(e) => { update({ date: e.target.value }) }} />
      </div>

      <div>
        <label htmlFor='minimumCharge'>Minimum Charge</label>
        <input type='text' id='minimumCharge' value={event.get('minimumCharge')} onChange={(e) => { update({ minimumCharge: e.target.value }) }} />
      </div>

      <div>
        <label htmlFor='description'>Description</label>
        <textarea id='description' value={event.get('description')} onChange={(e) => { update({ description: e.target.value }) }} />
      </div>
    </form>
  )
})
