import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import useSWR, { SWRConfig } from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function MyApp ({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  )
}

export default MyApp
