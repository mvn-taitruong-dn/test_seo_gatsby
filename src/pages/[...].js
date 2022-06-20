import React from "react"
import { Router, Redirect } from "@reach/router"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import Details from "../components/Details"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
import Status from "../components/Status"

const App = () => (
  <Layout>
    <Status />
    <Router>
      <PrivateRoute path="/details" component={Details} />
      <PrivateRoute path="/profile" component={Profile} />
      <Login path="/login" />
      <Redirect from="/hello/*" to='/hello' noThrow/>
      <Redirect from="/*" to='/' noThrow/>
    </Router>
  </Layout>
)

export default App