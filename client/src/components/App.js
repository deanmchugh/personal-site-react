import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import './app.css'
import Blog from './blog/Blog'
import Contacts from './contacts/Contacts'
import Default from './Default'
import Home from './home/Home'
import Navbar from './navbar/Navbar'
import Portfolio from './portfolio/Portfolio'
import Resume from './resume/Resume'

class App extends Component {
  render() {
    return (
      <div> 
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/blog' component={Blog} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/resume' component={Resume} />
          <Route component={Default} />
        </Switch>
        <Contacts />
      </div>
    );
  }
}

export default App
