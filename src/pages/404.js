import React, { useEffect } from "react"
import Layout from "../components/Layout"
import View from "../components/View"
import { navigate } from 'gatsby'

const NotFound = () => navigate('/', {replace:true})

export default NotFound
