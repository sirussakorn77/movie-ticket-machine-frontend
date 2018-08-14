import React from 'react'
import Home from '../src/components/Home'
import HomeLayout from '../src/components/HomeLayout'
import { withRouter } from 'next/router'

class index extends React.Component {
componentDidMount() {
  const { router } = this.props
  router.prefetch('/index')
}
  render() {
    return(
        <div>
        <HomeLayout />
        </div>
    )
  }}

export default withRouter(index)