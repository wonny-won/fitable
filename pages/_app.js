import Header from '../src/components/commons/layout/header/header.container'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
    )
}
