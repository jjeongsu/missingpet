import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  //제일 시작점
  return (
    <>
      <h1>/pages/index.js</h1>
      <ul>
        <li><a href="/sub">/pages/sub/index.tsx</a></li>
        <li><a href="/sub/kiki">/pages/sub/kiki.tsx</a></li>
        <li><a href="/sub/1">/pages/sub/[id].js</a></li>
        <li><a href="/sub/2">/pages/sub/[id].js</a></li>
        

      </ul>
      <h1> HELLO</h1>
    </>
  )
}
