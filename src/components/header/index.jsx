'use client'
import styles from './style.module.css'
import { useEffect, useState } from 'react';
import Nav from './nav';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Logo from '../../../public/logo.svg'
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {

  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
    <div className='relative z-[99999]'>
    <div className={styles.main}>
    <div className='pt-4 px-4 flex'>
      <Link href='/'>
      <Image alt='logo' src={Logo} height={75} width={75}/>
      </Link>
    </div>
    <div className={styles.header}>
        <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </div>
      </div>
    </div>
    <AnimatePresence mode="wait">
      {isActive && <Nav />}
    </AnimatePresence>
    </div>
    </>
  )
}
