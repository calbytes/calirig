import React from 'react';
import Layout from '../components/layout';
import { getCookie } from 'cookies-next';

export default function Login({ username }): JSX.Element {
    async function logOut() {
        fetch('/api/logout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            }
          })
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              // Assuming you don't need a response from the server
              console.log('Logoff successful');
            })
            .catch(error => {
              console.error('Error:', error);
            });
    }

    return(
        <Layout title="Login">
            <div className="mt-3 d-flex justify-content-center flex-column align-items-center">
                {username ? 
                    <div className="lead mb-3">
                        <div>You are already logged in. Log off to end your session.</div>
                        <div className="d-flex justify-content-center">
                            <button onClick={logOut} className="btn btn-primary">Log Off</button>
                        </div>
                    </div>
                :
                    <div>
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
                }
            </div>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const req = context.req;
    const res = context.res;
  
    var username = getCookie('username', { req, res });
    var role = getCookie('role', { req, res });
    
    return {
      props: {
        username: username || null
      }
    };
  };