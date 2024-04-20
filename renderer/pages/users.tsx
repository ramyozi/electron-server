import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import List from '../components/User/List'
import { User } from '../interfaces'
import { findAll } from '../utils/sample-api-users'

type Props = {
    items: User[]
    user: User;
    pathname: string
}

const WithInitialProps = ({ items , user}: Props) => {
    const router = useRouter()
    return (
        <Layout title="List Example (as Function Component) | Next.js + TypeScript + Electron Example" user={user}>
            <h1>List Example (as Function Component)</h1>
            <p>You are currently on: {router.pathname}</p>
            <List items={items} />
            <p>
                <Link href="/dashboard">
                <a>Go home</a>
                </Link>
            </p>
        </Layout>
    )
}

export async function getStaticProps() {
    const items: User[] = await findAll()

    return { props: { items } }
}

export default WithInitialProps
