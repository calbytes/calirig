import Layout from '../components/layout';
import React from 'react';
import { getCookie } from 'cookies-next';
import Link from 'next/link';

export default function Home({ username, role }): JSX.Element {
  return (
    <Layout title="Home">
      <div className="mt-3 d-flex justify-content-center flex-column align-items-center">
        {username ? 
          <div >
            <p>
              Hello, {username}! Your access: {role}
            </p>
          </div>
        :
        <div>
            <p>
              Hello, log in to access additional resources.
            </p>
          </div>
        }
        {role === "ADMIN" ?
        <div>
          You have access to: <Link href="/private/dashboard">Dashboard</Link>
        </div>
          
          :
          <></>
        }
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const req = context.req
  const res = context.res
  var username = getCookie('username', { req, res });
  var role = getCookie('role', { req, res });

  return {
    props: {
      username: username || null,
      role: role || null,
    }
  };
};