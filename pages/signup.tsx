import Layout from '../components/layout';
import React, { FormEvent } from 'react';

export default function SignUp() {
    async function checkPasswords(event: FormEvent<HTMLFormElement>){
        const formData = new FormData(event.currentTarget);
        var pwd = formData.get("password");
        var pwdCheck = formData.get("passwordcheck");

        if (pwd !== pwdCheck) {
            alert("Passwords do not match");
            event.preventDefault();
            return false;
        }
        return true;
    }

    const clearValues = () => {
        const formElement = document.getElementById('signupForm') as HTMLFormElement;
        formElement.reset();
    }


    return(
        <Layout title="Sign Up">
            <div className="mt-3 d-flex justify-content-center flex-column align-items-center">
                <div>
                    <h3>Sign Up</h3>
                </div>
                <form id="signupForm" className="border p-3" onSubmit={checkPasswords} action='/api/signup' method='POST'>
                    <div className="form-group">
                        <input name="username" id="username" type="text" placeholder='Username' required />
                    </div>
                    <br />
                    <div className="form-group">
                        <input name="email" id="email" type="text" placeholder='E-mail' required />
                    </div>
                    <br />
                    <div className="form-group">
                        <input name="password" id="password" type="password" placeholder='Password' required />
                    </div>
                    <br />
                    <div className="form-group">
                        <input name="passwordcheck" id="passwordcheck" type="password" placeholder='Re-Enter Password' required />
                    </div>
                    <br />

                    <div className="d-flex justify-content-center">
                        <button className="btn btn-secondary mr-2 mx-auto" onClick={clearValues} type="button">Cancel</button>
                        <button className="btn btn-primary mr-2 mx-auto" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}