import * as React from 'react'

import { User } from '../../interfaces'

type ListDetailProps = {
  item: User
}


const ListDetail = ({ item: user }: ListDetailProps) => (
  <div>
    <h1>User: {user.id}</h1>
    <p>First Name: {user.firstname}</p>
    <p>Last Name: {user.lastname}</p>
    <p>Email: {user.email}</p>
    <p>Role: {user.role}</p>
    <p>Status: {user.status}</p>
    <p>Created At: {user.created_at}</p>
    <p>Updated At: {user.updated_at}</p>
  </div>
)

export default ListDetail
