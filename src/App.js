import React from "react"
import Signup from "./components/Authentication/Signup"

import { AuthProvider } from "./components/Authentication/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./components/Authentication/Dashboard"
import Login from "./components/Authentication/Login"
import PrivateRoute from "./components/Authentication/PrivateRoute"
import ForgotPassword from "./components/Authentication/ForgotPassword"
import UpdateProfile from "./components/Authentication/UpdateProfile"
import Homepage from "./components/Home/Homepage"
import Menu from "./components/Menu/Menu"
import Galery from "./components/Galery/Galery"
import AboutUs from "./components/AboutUs/AboutUs"

function App() {
  return (
    <div>
      
        <Router>
          <AuthProvider>
            <Switch>
             <Route exact path="/" component={Homepage} />
             <Route path="/menu" component={Menu} />
              <Route path="/galery" component={Galery} />  
              <Route path="/aboutus" component={AboutUs} />  
              <PrivateRoute path="/profile" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      
    </div>
  )
}

export default App
