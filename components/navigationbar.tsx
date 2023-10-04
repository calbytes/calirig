import styles from './layout.module.css';
import Link from 'next/link';
import { getCookie } from 'cookies-next';
import React from 'react';

export default function NavigationBar({ role }): JSX.Element {
    return(
        <nav className={styles.navbar}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            {role == "admin" ?
                <Link href="/private/dashboard">Dashboard</Link>
            :
                <></>
            }
            
            <div className={styles.navFixedRight}>
                <Link href="/"> </Link>
                <Link href="/signup">Sign Up</Link>
                <Link href="/login">Login</Link>
            </div>
        </nav>
    );
}


export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var role = getCookie('role', { req, res });
    if (role == undefined){
        role = null;
    }
    
    return { props: { role } };
  };