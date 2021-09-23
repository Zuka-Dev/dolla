import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SigninPage from './pages/signin'
import Home from './components/Home'
function App() {
  
  return (
    <Router>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SigninPage} exact /> 
       </Switch>
    </Router>
  )
}

export default App
