import { Repo } from '@/components/Repo';

export async function User() {

    const response = await fetch('https://api.github.com/users/gabrielzolk', {
        cache: 'no-store'
    })
    const user = await response.json()


    return (
        <div>
            <h1>UserComponent</h1>
            <pre>{JSON.stringify(user, null, 2)}</pre>

             {/* @ts-expect-error Async Server Component */}
            <Repo />
        </div>
    )
}
