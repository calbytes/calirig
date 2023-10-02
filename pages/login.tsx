import React from 'react';
import Layout from '../components/layout';
import styles from '../components/layout.module.css';
import utilStyles from '../components/layout.module.css';

export default function Login(): JSX.Element {
    return(
        <Layout title="Login">
            
            <div className={styles.center}>
                <h1 className={utilStyles.headingXl}>
                    Member Login
                </h1>
                <form>
                    <label>
                        <p>Username</p>
                        <input type="text" />
                    </label>

                    <label>
                        <p>Password</p>
                        <input type="password" />
                    </label>

                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}