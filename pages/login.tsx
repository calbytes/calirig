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
                throw new Error('An error occurred for Log Out.');
              }

              console.log('Logoff successful');
              window.location.reload();
            })
            .catch(error => {
              console.error('Error:', error);
            });
    }

    const clearValues = () => {
        const formElement = document.getElementById('loginForm') as HTMLFormElement;
        formElement.reset();
    }

    return(
        <Layout title="Login">
            <div>
                {username ? 
                    <div className="mt-3 d-flex justify-content-center flex-column align-items-center">
                        <div>You are already logged in. Log out to end your session.</div>
                        <div className="d-flex justify-content-center">
                            <button onClick={logOut} className="btn btn-primary">Log Off</button>
                        </div>
                    </div>
                :
                    <div className="mt-3 d-flex justify-content-center flex-column align-items-center">
                        <div>
                            <h3>Log In</h3>   
                        </div>
                        <form id="loginForm" className="border p-3" action='/api/login' method='POST'>
                            <div className="form-group">
                                <input name="username" id="username" type="text" placeholder='Username' required />
                            </div>
                            <br />
                            <div className="form-group">
                                <input name="password" id="password" type="password" placeholder='Password' required />
                            </div>
                            <br />

                            <div className="d-flex justify-content-center">
                                <button className="btn btn-secondary mr-2 mx-auto" onClick={clearValues} type="button">Cancel</button>
                                <button className="btn btn-primary mr-2 mx-auto" type="submit">Submit</button>
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