import Layout from '../components/layout';
import React from 'react';
import { getCookie } from 'cookies-next';
import Link from 'next/link';
import * as log4js from "log4js";
import Quote from '../components/quote';

export default function Home({ username, role, quote }): JSX.Element {
  return (
    <Layout title="Home">
      <div className="mt-3 d-flex justify-content-center flex-column align-items-center">
        {username ? 
          <div>
            <p className="lead mb-3">
              Hello, {username}! Your access: {role}
            </p>
          </div>
        :
          <div>
            <p className="lead mb-3">
              Sign in to access additional resources.
            </p>
          </div>
        }
        
        {role === "ADMIN" ?
          <div className="lead mb-3">
            You have access to: <Link href="/private/dashboard">Dashboard</Link>
          </div>
        :
          <></>
        }
      </div>
      <div className="container d-flex align-items-center" style={{ height: '60vh', maxWidth: '600px' }}>
          <Quote quoteData={quote}/>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const logger = log4js.getLogger();
  logger.level = "info";

  const req = context.req;
  const res = context.res;

  const ipaddr = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  var username = getCookie('username', { req, res });
  var role = getCookie('role', { req, res });

  logger.log("<INDEX> req.ipaddr: " + ipaddr);

  const ip = '148.75.26.14'
  const quoteURL = 'http://' + ip + '/quote'
  const response = await fetch(quoteURL);
  const quote = await response.json();

  return {
    props: {
      username: username || null,
      role: role || null,
      quote: quote || null,
    }
  };
};