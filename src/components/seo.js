import React, { useEffect } from 'react';
import {useLocation} from "@reach/router";
import { Helmet } from 'react-helmet';
import Logo from '../images/logo.png'

const SEO = ({title, description}) => {
  const {pathname, origin} = useLocation();
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
    <Helmet title={data[pathname]?.title || 'Auth Gatsby'} titleTemplate={titleTemplate}>
        <meta name="description" content={data[pathname]?.description ||'Auth Gatsby'} />
        <meta property='og:url' content={`${siteUrl}${pathname}`} />
        <meta property='og:title' content={data[pathname]?.title || 'Auth Gatsby OG'} />
        <meta property="og:description" content={data[pathname]?.description || 'Auth Gatsby OG'  } />
        
        <meta name="robots" content="index"></meta>
    </Helmet>
  );
};

export default SEO;