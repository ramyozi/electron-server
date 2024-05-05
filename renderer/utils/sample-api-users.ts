import { User } from '../interfaces'

/** Dummy user data. */

/*
type User = {
  id: number
  firstname: string
  lastname: string
  email: string
  password: string
  role: string
  status: string
  created_at: string
  updated_at: string
}
 */
export const dataArray: User[] = [
    {
        id: 101,
        firstname: 'Sami',
        lastname: 'Touati',
        email: 'samitouati@example.dz',
        password: 'password',
        role: 'doctor',
        sex: 'M',
        status: 'active',
        created_at: '2021-09-01',
        updated_at: '2021-09-01'
    },
    {
        id: 202,
        firstname: 'Lila',
        lastname: 'Benmoussa',
        email: 'lilabenmoussa@example.dz',
        password: 'password',
        role: 'nurse',
        sex: 'F',
        status: 'active',
        created_at: '2021-09-01',
        updated_at: '2021-09-01'
    },
    {
        id: 303,
        firstname: 'Omar',
        lastname: 'Khaled',
        email: 'omarkhaled@example.dz',
        password: 'password',
        role: 'admin',
        sex: 'M',
        status: 'active',
        created_at: '2021-09-01',
        updated_at: '2021-09-01'
    },
    {
        id: 404,
        firstname: 'Yasmine',
        lastname: 'Bensaïd',
        email: 'yasminebensaid@example.dz',
        password: 'password',
        role: 'doctor',
        sex: 'F',
        status: 'active',
        created_at: '2021-09-01',
        updated_at: '2021-09-01'
    },
    {
        id: 505,
        firstname: 'Amine',
        lastname: 'Larbi',
        email: 'aminelarbi@example.dz',
        password: 'password',
        role: 'nurse',
        sex: 'M',
        status: 'active',
        created_at: '2021-09-01',
        updated_at: '2021-09-01'
    },
    {
        id: 606,
        firstname: 'Sara',
        lastname: 'Bouzidi',
        email: 'sarabouzidi@example.dz',
        password: 'password',
        role: 'admin',
        sex: 'F',
        status: 'active',
        created_at: '2021-09-01',
        updated_at: '2021-09-01'
    }
]

/**
 * Calls a mock API which finds a user by ID from the list above.
 *
 * Throws an error if not found.
 */
export async function findData(id: number | string) {
  const selected = dataArray.find((data) => data.id === Number(id))

  if (!selected) {
    throw new Error('Cannot find user')
  }

  return selected
}

/** Calls a mock API which returns the above array to simulate "get all". */
export async function findAll() {
  // Throw an error, just for example.
  if (!Array.isArray(dataArray)) {
    throw new Error('Cannot find users')
  }

  return dataArray
}
