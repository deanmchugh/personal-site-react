import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import headShot from './img/headShot.png'

export default class Navbar extends Component {
  render() {
    return (
      <div className='banner'>
        <img src={headShot} alt='headshot'/>
         <div className='navbar'>
            <Link to='/' alt='home'>
              <button>HOME</button>
            </Link>
            <Link to='/project' alt='project'>
              <button>PROJECTS</button>
            </Link>
            <Link to='/work' alt='work'>
              <button>WORK</button>
            </Link>
            <Link to='/blog' alt='blog'>
              <button>BLOG</button>
            </Link>
          </div>
      </div>   
    )
  }
}
