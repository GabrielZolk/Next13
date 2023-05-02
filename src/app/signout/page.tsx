import { cookies, headers } from 'next/dist/client/components/headers'
import Link from 'next/link'
import React from 'react'

export default function Dashboard() {
 //  Acessando Cookies e Headers da aplicação
 const userCookies = cookies()
 const userHeaders = headers()



    return (
        <div>
            <h1>Signout</h1>
            <Link href='/'>Home</Link>
            {JSON.stringify(userCookies.getAll(), null, 2)}
            {JSON.stringify(userHeaders.entries(), null, 2)}
        </div>
    )
}
