import Navbar from "../components/Navbar"
import '@/styles/globals.css'
import About from "@/components/About"

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <About />
      {/* <Component {...pageProps} /> */}
    </div>
  )
}
