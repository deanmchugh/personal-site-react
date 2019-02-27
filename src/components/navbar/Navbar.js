import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to='/' alt='home'>Home</Link>
        <Link to='/project' alt='project'>Project</Link>
        <Link to='/work' alt='work'>Work</Link>
        <Link to='/blog' alt='blog'>Blog</Link>
      </React.Fragment>
    )
  }
}
