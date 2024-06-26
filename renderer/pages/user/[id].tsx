// import { NextPageContext } from 'next'
import Layout from '../../components/Layout'
import { User } from '../../interfaces'
import { findAll, findData } from '../../utils/sample-api-users'
import ListDetail from '../../components/User/ListDetail'
import { GetStaticPaths, GetStaticProps } from 'next'
import {useUser} from "../../context/UserContext";

type Params = {
  id?: string
}

type Props = {
  item?: User
  errors?: string
}

const InitialPropsDetail = ({ item, errors }: Props) => {
    const {user} = useUser();
  if (errors) {
    return (
      <Layout title={`Erreur`} user={user}>
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout
      title={`${item ? item.firstname : 'Detail'} `}
        user={user} >
      {item && <ListDetail item={item} />}
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const items: User[] = await findAll()
    const paths = items.map((item) => `/user/${item.id}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as Params

  try {
    const item = await findData(Array.isArray(id) ? id[0] : id)
    return {
      props: {
        item,
      },
    }
  } catch (err) {
    return {
      props: {
        errors: err.message,
      },
    }
  }
}

export default InitialPropsDetail
