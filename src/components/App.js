import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Blog from './blog/Blog'
import Default from './Default'
import Home from './home/Home'
import Navbar from './navbar/Navbar'
import Project from './project/Project'
import Work from './work/Work'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/blog' component={Blog} />
          <Route path='/project' component={Project} />
          <Route path='/work' component={Work} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App
