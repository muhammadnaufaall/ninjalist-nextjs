import React from 'react'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(ninja => {
        return{
            params: {id: ninja.id.toString()}
        }
    })

    return {
         paths,
         fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json()

    return{
        props: { ninja: data }
    }
}

const Details = ({ ninja }) => {
  return (
    <div>
        <h1>Name : <b>{ninja.name}</b></h1>
        <p>Email : <b>{ninja.email}</b></p>
        <p>Website : <b>{ninja.website}</b></p>
        <p>City : <b>{ninja.address.city}</b></p>
        <p>Company name : <b>{ninja.company.name}</b></p>
    </div>
  )
}

export default Details