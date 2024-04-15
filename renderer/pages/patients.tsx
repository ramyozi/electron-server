import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import List from '../components/Patient/List'
import { Patient } from '../interfaces'
import { findAll } from '../utils/sample-api-patients'

type Props = {
    items: Patient[]
    pathname: string
}

const WithInitialProps = ({ items }: Props) => {
    const router = useRouter()
    return (
        <Layout title="List Example (as Function Component) | Next.js + TypeScript + Electron Example">
            <h1>List Example (as Function Component)</h1>
            <p>You are currently on: {router.pathname}</p>
            <List patients={items} />
            <p>
                <Link href="/">
                    <a>Go home</a>
                </Link>
            </p>
        </Layout>
    )
}

export async function getStaticProps() {
    const items: Patient[] = await findAll()

    return { props: { items } }
}

export default WithInitialProps
