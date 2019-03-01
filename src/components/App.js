import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import './app.css'
import Blog from './blog/Blog'
import Contacts from './contacts/Contacts'
import Default from './Default'
import Home from './home/Home'
import Navbar from './navbar/Navbar'
import Project from './project/Project'
import Resume from './resume/Resume'

class App extends Component {
  render() {
    return (
      <div className='display'> 
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/blog' component={Blog} />
          <Route path='/project' component={Project} />
          <Route path='/resume' component={Resume} />
          <Route component={Default} />
        </Switch>
        <Contacts />
      </div>
    );
  }
}

export default App
