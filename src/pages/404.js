import React, { useEffect } from "react"
import Layout from "../components/Layout"
import View from "../components/View"
import { navigate} from 'gatsby'


import { useLocation } from "@reach/router"



const NotFound = () => 
{
  const location = useLocation();
  useEffect(()=>{
    console.log("location.pathname",location.pathname); 
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
