import Layout from '../src/components/commons/layout/index.tsx'
export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
    )
}
