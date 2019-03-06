import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import headShot from './img/headShot.png'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className='banner'>
          <img src={headShot} alt='headshot'/>
          <div className='bottom-text'><h1>D.McHugh</h1></div>
        </div>
         <div className='navbar'>
            <Link to='/' alt='home'>
              <button>BIO</button>
            </Link>
            <Link to='/portfolio' alt='protfolio'>
              <button>PORTFOLIO</button>
            </Link>
            <Link to='/resume' alt='resume'>
              <button>RESUME</button>
            </Link>
            <Link to='/blog' alt='blog'>
              <button>BLOG</button>
            </Link>
          </div>
      </div>   
    )
  }
}
