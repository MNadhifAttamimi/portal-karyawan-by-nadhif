import { setCookie } from 'cookies-next';
import Users from '@/pages/models/users';
import { generateRandomToken } from '@/utils/RandomToken';

export default async function handler(req, res) {
    try {
        if (req.method !== 'POST') {
            return res
                .status(405)
                .json({ error: true, message: 'Method not allowed' });
        }

        const { password } = req.body;
        const { name } = req.body;

        // Validasi kosong atau tidak

        if (!password) {
            return res.status(400).json({ error: true, message: 'tidak ada Password' });
        }

        // Validasi sesuai kreteria atau tidak

        if (password.length < 6 || password.length >= 10) {
            return res.status(400).json({
                error: true,
                message: 'password harus di antara 6 sampai 10 karakter',
            });
        }


        const user = await Users.findOne({ name, password });

        if (!user || !user.password) {
            return res.status(400).json({
                error: true,
                message: 'User not found',
            });
        }

        const token = generateRandomToken(10);
        const tokenExpiration = 60 * 60 * 24 * 30; // 1 month in seconds

        setCookie('token', token, { res, maxAge: tokenExpiration, secure: true, sameSite: 'None' });
        setCookie('username', user.username, { res, maxAge: tokenExpiration, secure: true, sameSite: 'None' });

        return res.status(200).json({ token, username: user.username });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: true, message: 'There was a problem, please contact the developer' });
    }
}
