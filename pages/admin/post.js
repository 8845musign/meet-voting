import withRedux from 'next-redux-wrapper'

import { initStore } from '../../redux/stores/PostStore'
import Post from '../../components/Admin/Post'

const Page = () => (
  <Post />
)

export default withRedux(initStore)(Page)
