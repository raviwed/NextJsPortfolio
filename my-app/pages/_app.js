import Navbar from "../Component/Navbar";


export default function App({ Component, pageProps }) {
  return <>
  <Navbar/>
  <Component {...pageProps} />
  </>
}
