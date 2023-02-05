import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="blogs"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Welcome to my Blogs!!</p>
        <Link href="/blogs/">
          <a className={styles.btn}>See Blogs Listing</a>
        </Link>
      </div>
    </>
  )
}