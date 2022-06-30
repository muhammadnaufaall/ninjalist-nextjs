import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  console.log(data);

  return {
    props: { ninjas: data }
  }
}

const index = ({ ninjas }) => {
  return (
    <>
    <Head>
      <title>Ninja List | Ninjas</title>
      <meta name='keywords' content='ninjas'></meta>
    </Head>
    <div>
      <h1>All ninjas</h1>
      {ninjas.map(ninja =>(
        <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
            <p>{ninja.website}</p>
          </a>
        </Link>
      ))}
    </div>
    </>
  )
}

export default index