import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import React from 'react';
import { getCookie } from 'cookies-next';

export default function Home({ username }): JSX.Element {
  return (
    <Layout title="Home">
      <div>
        {username ? 
          <div className="d-flex justify-content-center align-items-center">
            <p>Hello, {username}!</p>
          </div>
        :
        <div className="d-flex justify-content-center align-items-center">
            <p>To view more, login with your credentials.</p>
          </div>
        }
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const req = context.req
  const res = context.res
  var username = getCookie('usr', { req, res });
  if (username == undefined){
      username = null;
  }
  
  return { props: { username } };
};