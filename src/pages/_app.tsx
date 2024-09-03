import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className="main">
      <div className="header flex gap-6 text-center text-4xl mb-9">
        <Link href='/'>Home</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/about'>About</Link>
      </div>
      <AnimatePresence mode="wait">
        <Component key={router.route}  {...pageProps} />;
      </AnimatePresence>
    </div>
  )
}
