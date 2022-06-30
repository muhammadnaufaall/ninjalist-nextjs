import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name='keywords' content='ninjas'></meta>
    </Head>
    <div>
    <h1 className={styles.title}>This is the homepage</h1>
    <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <Link href="/ninjas">
      <a className={styles.btn}>See ninja list</a>
    </Link>
    </div>
    </>
  )
}
