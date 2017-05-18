import Head from 'next/head'
import withRedux from 'next-redux-wrapper'

import { initStore } from '../../redux/stores/PostStore'
import Post from '../../components/Admin/Post'

const Page = () => (
  <div>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='stylesheet' href='/static/css/bootstrap.min.css' />
    </Head>
    <Post />
  </div>
)

export default withRedux(initStore)(Page)
