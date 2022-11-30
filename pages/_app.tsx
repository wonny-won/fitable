import Layout from '../src/components/commons/layout/index'
import { globalStyles } from '../src/commons/styles/global.style'
import { Global } from '@emotion/react'
import { AppProps } from "next/app";
import React from 'react';


export default function App({ Component, pageProps }:AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
    )
}
