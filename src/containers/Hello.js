import React from 'react';
import Layout from '../components/Layout';
import Status from '../components/Status';
import Logo from '../images/logo.svg'
import Logo1 from '../images/logo.png'
const hello = () => {
  return (
    <Layout>  
         
      <Status/>

      <div>hello </div> 
      <img src={Logo1} alt='logo' />

    </Layout>
  );
};

export default hello;