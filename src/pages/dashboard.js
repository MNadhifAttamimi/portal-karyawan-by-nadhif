import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';
import styles from '../styles/Dashboard.module.css';

export default function Dashboard() {
    const router = useRouter();
    const [username, setUsername] = useState('');

    useEffect(() => {
        const token = getCookie('token');
        const usernameFromCookie = getCookie('username');

        if (!token || !usernameFromCookie) {
            router.push('/login');
        } else {
            setUsername(usernameFromCookie);
        }
    }, []);

    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.navHeader}>
                <div className={styles.title}>
                    <h3>{username}</h3>
                </div>
                <div className={styles.logoutButton}>
                    <Link href="#">Logout</Link>
                </div>
            </div>

            <div className={styles.navSide}>
                <Link href="#" className={styles.navItem}>
                    <div className={styles.icon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_101_9269)">
                                <path d="M10.0001 19V14H14.0001V19C14.0001 19.55 14.4501 20 15.0001 20H18.0001C18.5501 20 19.0001 19.55 19.0001 19V12H20.7001C21.1601 12 21.3801 11.43 21.0301 11.13L12.6701 3.59997C12.2901 3.25997 11.7101 3.25997 11.3301 3.59997L2.9701 11.13C2.6301 11.43 2.8401 12 3.3001 12H5.0001V19C5.0001 19.55 5.4501 20 6.0001 20H9.0001C9.5501 20 10.0001 19.55 10.0001 19Z" fill="#4318FF" />
                            </g>
                            <defs>
                                <clipPath id="clip0_101_9269">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p>Home</p>
                </Link>

                <Link href="#" className={styles.navItem}>
                    <div className={styles.icon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_101_9265)">
                                <path d="M15.55 13C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C21.25 4.82 20.77 4 20.01 4H5.21L4.27 2H1V4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H19V15H7L8.1 13H15.55ZM6.16 6H18.31L15.55 11H8.53L6.16 6ZM7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="#A3AED0" />
                            </g>
                            <defs>
                                <clipPath id="clip0_101_9265">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p>NFT Marketplace</p>
                </Link>

                <Link href="#" className={styles.navItem}>
                    <div className={styles.icon}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_101_9261)">
                                <path d="M7.46659 10.7333H7.69992C8.59825 10.7333 9.33325 11.4683 9.33325 12.3667V20.5333C9.33325 21.4317 8.59825 22.1667 7.69992 22.1667H7.46659C6.56825 22.1667 5.83325 21.4317 5.83325 20.5333V12.3667C5.83325 11.4683 6.56825 10.7333 7.46659 10.7333ZM13.9999 5.83334C14.8983 5.83334 15.6333 6.56834 15.6333 7.46668V20.5333C15.6333 21.4317 14.8983 22.1667 13.9999 22.1667C13.1016 22.1667 12.3666 21.4317 12.3666 20.5333V7.46668C12.3666 6.56834 13.1016 5.83334 13.9999 5.83334ZM20.5333 15.1667C21.4316 15.1667 22.1666 15.9017 22.1666 16.8V20.5333C22.1666 21.4317 21.4316 22.1667 20.5333 22.1667C19.6349 22.1667 18.8999 21.4317 18.8999 20.5333V16.8C18.8999 15.9017 19.6349 15.1667 20.5333 15.1667Z" fill="#A3AED0" />
                            </g>
                            <defs>
                                <clipPath id="clip0_101_9261">
                                    <rect width="28" height="28" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p>Tables</p>
                </Link>

                <Link href="#" className={styles.navItem}>
                    <div className={styles.icon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_101_9257)">
                                <path d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z" fill="#A3AED0" />
                            </g>
                            <defs>
                                <clipPath id="clip0_101_9257">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p>Kanban</p>
                </Link>

                <Link href="#" className={styles.navItem}>
                    <div className={styles.icon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_101_9253)">
                                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V18C20 15.34 14.67 14 12 14Z" fill="#A3AED0" />
                            </g>
                            <defs>
                                <clipPath id="clip0_101_9253">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p>Profile</p>
                </Link>

                <Link href="#" className={styles.navItem}>
                    <div className={styles.icon}>
                        <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM8 16C6.9 16 6 15.1 6 14C6 12.9 6.9 12 8 12C9.1 12 10 12.9 10 14C10 15.1 9.1 16 8 16ZM5 7V5C5 3.34 6.34 2 8 2C9.66 2 11 3.34 11 5V7H5Z" fill="#A3AED0" />
                        </svg>
                    </div>
                    <p>Sign In</p>
                </Link>
            </div>
        </div>
    );
}
