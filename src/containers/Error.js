import React from "react"
import Layout from "../components/Layout"
import View from "../components/View"

const NotFound = ({code}) => (
  <Layout>
    <View title="Not Found">
      <h3>{code}</h3>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </View>
  </Layout>
)

export default NotFound
