import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import headShot from './img/headShot.png'

export default class Navbar extends Component {
  render() {
    return (
      <div className='nav-display'>
        <header className='banner'>
          <img className='headShot' src={headShot} alt='headshot'/>
          <div className='bottom-text'><h1>D.McHugh</h1></div>
        </header>
         <nav className='navbar'>
            <Link to='/' alt='home'>
              <button>BIO</button>
            </Link>
            <Link to='/portfolio' alt='protfolio'>
              <button>PORTFOLIO</button>
            </Link>
            <Link to='/resume' alt='resume'>
              <button>RESUME</button>
            </Link>
          </nav>
      </div>   
    )
  }
}
