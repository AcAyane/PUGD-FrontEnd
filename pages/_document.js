import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const initialProps = await Document.getInitialProps(ctx)
//     return { ...initialProps }
//   }

  render() {
    return (
      <Html>
        <Head>
        <link rel="stylesheet" href="../css/bootstrap.css" />
        <link rel="stylesheet" href="../css/materialize.min.css" />

        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <link rel="stylesheet" href="css/customstyle.css"/>


        <link rel="stylesheet" href="css/style.min.css" />
        </Head>

        <body className="login-form">
          <Main />
          <NextScript />
        </body>
      <style jsx>
        {`
         .login-form{
          background-image: url(images/flat-bg.jpg);
          background-repeat: no-repeat;
          background-size: cover;
       }
       `}
      </style>
      </Html>
    )
  }
}

export default MyDocument
