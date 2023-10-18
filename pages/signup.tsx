import Layout from '../components/layout';

export default function SignUp() {
    return(
        <Layout title="Sign Up">
            <div className="mt-3 d-flex justify-content-center flex-column align-items-center">
                <div>
                    <h3>Sign Up Form</h3>
                </div>
                <form className="border p-3" action='/api/signup' method='POST'>
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

                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}