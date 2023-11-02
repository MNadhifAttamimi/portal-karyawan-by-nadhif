import mongoose from 'mongoose';

const connectMongoDB = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://ppqita:santri@ppqitadb.76fharf.mongodb.net/portal-siswa',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
    } catch (error) {
        console.log(error);
    }
};

connectMongoDB();

const Users = mongoose.model(
    'user', // akan jadi collection dengan nama users ketika disubmit di db
    new mongoose.Schema({
        id: {
            type: String,
            require: true,
        },
        name: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
        },
        nis: {
            type: String,
            require: true,
        },
        token: {
            type: String,
            default: '',
        },
    })
);

export default async function handler(req, res) {
    try {
        if (req.method !== 'POST') {
            return res
                .status(405)
                .json({ error: true, message: 'mehtod tidak diijinkan' });
        }

        const { token } = req.body;
        // validasi kosong atau tidak

        if (!token) {
            return res.status(400).json({ error: true, message: 'tidak ada token' });
        }

        // cek apakah user ada
        const user = await Users.findOne({ token });
        console.log('user: ', user);

        if (!user || !user.nis) {
            return res.status(400).json({
                error: false,
                message: 'token tidak valid atau sudah logout',
            });
        }

        // delete token
        const users = await Users.findOneAndUpdate(
            { nis: user.nis },
            { token: '' },
            { new: true }
        );
        console.log('users after update: ', users);

        // kasih tahu client (hanya data yg diperbolehkan)
        return res.status(200).json({ error: false, message: 'berhasil logout' });
    } catch (error) {
        console.log('error:', error);
        res
            .status(500)
            .json({ error: true, message: 'ada masalah harap hubungi developer' });
    }
}
