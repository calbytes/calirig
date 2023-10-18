import React from 'react';
import Layout from '../components/layout';

export default function Login(): JSX.Element {
    return(
        <Layout title="Login">
            <div className="mt-3 d-flex justify-content-center flex-column align-items-center">
                <div>
                    <h3>Log In</h3>   
                </div>
                <form className="border p-3" action='/api/login' method='POST'>
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