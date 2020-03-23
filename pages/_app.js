import React from 'react';
import App from 'next/app'; 

import Protect from '../shared/protect';  
// import AdminLayout from '../components/adminLayout';
const Nolayout =  ({children}) => <>{children}</>
class MyApp extends App {  
  render() {

    const { Component, pageProps, router } = this.props;
    const Layout = Component.Layout || Nolayout
  
      return (
     
              <Layout>
              <Component {...pageProps} />
              </Layout>
        
      )
  }
}

 
export default  Protect(MyApp) ;
