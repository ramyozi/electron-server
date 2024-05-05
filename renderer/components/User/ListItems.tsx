import React from 'react'
import Link from 'next/link'

import { User } from '../../interfaces'
import {FaEye} from "react-icons/fa";

type Props = {
  data: User
}

const ListItems = ({ data }: Props) => (
    <tr>
        <td>{data.id}</td>
        <td>{data.firstname} {data.lastname}</td>
        <td>{data.email}</td>
        <td>{data.role}</td>
        <td>{data.status}</td>
        <td>{data.created_at}</td>
        <td>{data.updated_at}</td>
        <td>
            <Link href={`/user/${data.id}`}>
                <FaEye />
            </Link>
        </td>
    </tr>
)

export default ListItems
