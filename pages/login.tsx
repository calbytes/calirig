import React from 'react';
import Layout from '../components/layout';
import styles from '../components/layout.module.css'

export default function Login(): JSX.Element {
    return(
        <Layout title="Login">
            <div className={styles.formContainer}>
                <form className="border p-3" action='/api/login' method='POST'>
                    <h3>Member Login</h3><br />

                    <div className="form-group">
                        <input name="username" id="username" type="text" placeholder='username' required />
                    </div>
                    <br />
                    <div className="form-group">
                        <input name="password" id="password" type="password" placeholder='password' required />
                    </div>
                    <br />

                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}