import Link from 'next/link'
// import { useRouter } from 'next/navigation'
import React from 'react'

export default function Dashboard() {
    // const router = useRouter()

    //  O uso mais comum do useRouter hoje é para utilizar o método router.refresh que corrige o problema de não-mutação do next devido ao seu cache automático de páginas
    

    // function submit() {
    //     router.push('/')
    // }

    return (
        <div>
            <Link href='/'>Home</Link>
            <h1>Dashboard</h1>
            <Link href='/auth/signin'>Auth</Link>
            {/* <form method='GET'>
                <input />
                <button onClick={() => submit()} type='submit'>Send</button>
            </form> */}
        </div>
    )
}
