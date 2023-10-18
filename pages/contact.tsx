import Layout from '../components/layout';
import React from 'react';

export default function Contact(): JSX.Element {
  return (
    <Layout title="Contact">
        <div className="mt-3 d-flex justify-content-center flex-column align-items-center">
          <div>
            <h3>Contact</h3>
          </div>
          <div>
          <form className="border p-3" action='/api/contact' method='POST'>
            <div className="form-group">
              <input name="name" id="name" type="text" placeholder='Name' required />
            </div>
            <br />
            <div className="form-group">
              <input name="email" id="email" type="email" placeholder='E-mail' required />
            </div>
            <br />
            <div className="form-group">
              <textarea name="message" id="message" placeholder='Message' maxLength={250} cols={30} rows={6} required />
            </div>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
          </div>
        </div>
    </Layout>
  );
}