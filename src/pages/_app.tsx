import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import Header from '../components/header'
import StickyCursor from '../components/StickyCursor'



export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className="main">
      <StickyCursor stickyElement={undefined}/>
      <Header />
      <AnimatePresence mode="wait">
        <Component key={router.route}  {...pageProps} />;
      </AnimatePresence>
    </div>
  )
}
