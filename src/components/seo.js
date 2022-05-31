import React, { useEffect } from 'react';
import {useLocation} from "@reach/router";
import { Helmet } from 'react-helmet';

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

  useEffect(()=>{
    console.log("pathName",pathname);
  },[pathname])

  return (
    <Helmet title={data[pathname].title} titleTemplate={titleTemplate}>
        <meta name="description" content={data[pathname].title} />
        <meta property='og:url' content={`${siteUrl}${pathname}`} />
        <meta property='og:title' content={data[pathname].title} />
        <meta property="og:description" content={data[pathname].description} />
       
    </Helmet>
  );
};

export default SEO;