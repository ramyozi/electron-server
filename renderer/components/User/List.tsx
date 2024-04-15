import React from 'react'
import ListItems from './ListItems'
import { User } from '../../interfaces'

type Props = {
  items: User[]
}

const List = ({ items }: Props) => (
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
        <th>Created At</th>
        <th>Updated At</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      {items.map((item) => (
          <ListItems key={item.id} data={item} />
      ))}
      </tbody>
    </table>
);

export default List
