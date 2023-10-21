import styles from './navbar.module.css';
import Link from 'next/link';
import React from 'react';

export default function NavigationBar(): JSX.Element {
    return(
        <nav className={styles.navbar}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            
            <div className="float-end">
                <Link href="/signup">Sign Up</Link>
                <Link href="/login">Login</Link>
            </div>
        </nav>
    );
}