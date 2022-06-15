import React, { useEffect } from "react"
import Layout from "../components/Layout"
import View from "../components/View"
import { navigate } from 'gatsby'



const NotFound = () => 
{
  useEffect(()=>{
    console.log("sdsdsa");
    navigate('/', {replace:true})
  },[])
  
  return (
 
  

  <Layout>
    <View title="Not Found">
      {/* <h3>{code}</h3> */}
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </View>
  </Layout>
)}

export default NotFound
