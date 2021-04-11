// pages/_app.js
import Layout from '../components/Layout'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
          <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp