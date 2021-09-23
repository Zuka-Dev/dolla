import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import "./App.css"
import SignInPage from './pages/signin'
import Home from './pages'
function App() {
  
  return (
    <Router> 
      <Switch>
        <Route path="/signin" component={SignInPage} exact/>
        <Route path="/money_app" component={Home} exact/>
        <Route path="/" component={Home} exact/>
      </Switch>
    </Router>
   
  )
}

export default App
