import styles from './layout.module.css';
import Link from 'next/link';

export default function NavigationBar() {
    return(
        <nav className={styles.navbar}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            
            <div className={styles.navFixedRight}>
                <Link href="/signup">Sign Up</Link>
                <Link href="/login">Login</Link>
            </div>
        </nav>
    );
}