import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../components/layout.module.css';
import React, { useState } from 'react';

export default function Contact(): JSX.Element {
  return (
    <Layout title="Contact">
        <div className={styles.forContainer}>
          <h1>Contact Me</h1>
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
              <input name="message" id="message" type="text" placeholder='Message' required />
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