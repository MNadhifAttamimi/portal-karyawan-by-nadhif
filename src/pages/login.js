import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Impor useRouter dari next/router
import styles from '../styles/Login.module.css';

export default function Login() {
    const router = useRouter(); // Menggunakan useRouter untuk navigasi

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const login = async () => {
        try {
            // Lakukan permintaan ke server untuk validasi login
            const response = await fetch('/api/login', {
                method: 'POST',
                body: JSON.stringify({ name, password }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                // Jika respons dari server menunjukkan login berhasil
                // Misalnya, server dapat mengirim respons dengan status 200 dan data login berhasil
                const data = await response.json();
                // Menggunakan router untuk mengarahkan navigasi ke halaman dashboard
                router.push('/dashboard');
            } else {
                // Handle jika login gagal, menampilkan pesan kesalahan dari server
                const errorData = await response.json();
                setLoginError(errorData.message);
            }
        } catch (error) {
            console.error('Login error:', error);
            setLoginError('An error occurred during login. Please try again.');
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <h1 className={styles.title}>Sign in</h1>
                <p className={styles.enter}>Enter your NIS and password to sign in!</p>
                <form id="login-form" className={styles.form}>
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
                    <div className={styles.checkboxFlex}>
                        <div className={styles.checkboxContainer}>
                            <input type="checkbox" id="keepLoggedIn" className={styles.checkbox} />
                            <label htmlFor="keepLoggedIn">Keep me logged in</label>
                        </div>
                        <div className={styles.checkboxContainer}>
                            <a href="#">Forget password?</a>
                        </div>
                    </div>
                    <button type="button" onClick={login} className={styles.signInButton}>Sign In</button>
                    {loginError && <p className={styles.errorMessage}>{loginError}</p>}
                </form>
                <div className={styles.registerText}>
                    Not registered yet?<a href="#">Create an Account</a>
                </div>
            </div>
        </div>
    );
}
