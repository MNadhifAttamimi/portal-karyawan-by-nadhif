import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Impor useRouter dari next/router
import styles from '../styles/Register.module.css'; // Ubah nama file CSS jika diperlukan

export default function Register({ nextPage, previousPage }) {
    const router = useRouter(); // Menggunakan useRouter untuk navigasi

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const register = async () => {
        // Membuat objek untuk mewakili data
        const data = {
            name: name,
            password: password
        };

        // Tampilkan nilai di konsol (sebagai contoh)
        console.log('Name:', name);
        console.log('Password:', password);

        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (res.ok) {
                const responseData = await res.json();

                // Set cookie for the client-side
                document.cookie = `token=${responseData.token}; max-age=${responseData.tokenExpiration}; secure; samesite=None`;
                document.cookie = `username=${responseData.name}; max-age=${responseData.tokenExpiration}; secure; samesite=None`;

                alert('Data sudah sukses didaftarkan');
                router.push('/login');
            } else {
                console.error('Gagal melakukan permintaan:', res.status);
                alert('Data gagal didaftarkan');
            }
        } catch (error) {
            console.log('error: ', error);
            alert('Terjadi Kesalahan, harap hubungi tim support');
        }
    }

    return (
        <div className={styles.registerContainer}>
            <div className={styles.registerBox}>
                <h1 className={styles.title}>Sign up</h1>
                <p className={styles.enter}>Enter your information to create an account!</p>
                <form id="register-form" className={styles.form}>
                    <div className={styles.inputContainer}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            className={styles.input}
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className={styles.input}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="button" onClick={register} className={styles.registerButton}>
                        Register
                    </button>
                </form>
                <div className={styles.registerText}>
                    Already have an account? <a href="#">Sign in</a>
                </div>
            </div>
        </div>
    );
}
