import styles from '../components/layout.module.css'
import Layout from '../components/layout';

export default function SignUp() {
    return(
        <Layout title="Sign Up">
            <div className={styles.formContainer}>
                <form className="border p-3" action='/api/signup' method='POST'>
                    <h3>Sign Up Form</h3><br />

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