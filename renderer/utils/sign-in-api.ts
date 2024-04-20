// pages/api/signin.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import {dataArray} from "./sample-api-users";

// Utility function to find user by email
const findUserByEmail = (email: string) => {
    return dataArray.find(user => user.email === email);
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const { email, password } = req.body;
            const user = findUserByEmail(email);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            const isPasswordValid = bcrypt.compareSync(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid password' });
            }
            return res.status(200).json({ message: 'Authentication successful', user });
        } catch (error) {
            return res.status(500).json({ message: 'An error occurred', error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
