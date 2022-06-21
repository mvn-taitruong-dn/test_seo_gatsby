import React, { useEffect } from 'react';
import {useLocation} from "@reach/router";
import { Helmet } from 'react-helmet';
import Logo from '../images/logo.png'

const SEO = ({title, description, screen}) => {
  // const {pathname, origin} = useLocation();
  const titleTemplate = '%s · The Real Hero'
  const siteUrl  = origin;
  const data = {
    "/":{
      title:'Simple Auth ',
      description: 'Test SEO ',
    },
    '/hello':{
      title: 'Simple Auth hello ',
      description: 'Test SEO hello'
    }
  }

  const seo = {
    title: ''
  }

  useEffect(()=>{
    console.log("pathName",pathname);
  },[pathname])

  return (
    <Helmet title={title ?? data[screen]?.title } titleTemplate={titleTemplate}>
        <meta name="description" content={description ?? data[screen]?.description} />
        <meta property='og:url' content={`${siteUrl}${screen}`} />
        <meta property='og:title' content={title ?? data[screen]?.title} />
        <meta property="og:description" content={description ?? data[screen]?.description } />
        
        <meta name="robots" content="index"></meta>
    </Helmet>
  );
};

export default SEO;