import React, { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'


const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
        // router.go(-1)
        router.push('/')
    }, 3000)
  }, [])

  return (
    <>
    <Head>
      <title>404</title>
      <meta name='keywords' content='ninjas'></meta>
    </Head>
    <div className='not-found'>
        <h1>Oops...</h1>
        <h2>That page cannot be found</h2>
        <p>Go back to the <Link href="/"><a>home page</a></Link></p>
    </div>
    </>
  )
}

export default NotFound