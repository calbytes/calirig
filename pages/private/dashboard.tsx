import Layout from "../../components/layout";
import { getCookie } from 'cookies-next';
import * as log4js from "log4js";

export default function Dashboard({ username, role }): JSX.Element  {
    return(
        <Layout title="Dashboard">
            {role === "ADMIN" ? 
            <div className="d-flex justify-content-center align-items-center">
                <p>Hello, {username}. Welcome to the Dashboard.</p>
            </div>
            :
            <div className="d-flex justify-content-center align-items-center">
                <p>You do not have access to the Dashboard, silly willy ;-p</p>
            </div>
            }
        </Layout>
      );
}

export async function getServerSideProps(context) {
    const logger = log4js.getLogger();
    logger.level = "info";

    const req = context.req;
    const res = context.res;

    var username = getCookie('usr', { req, res });
    var role = getCookie('role', { req, res });

    const ipaddr = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    logger.log("<INDEX> req.ipaddr: " + ipaddr);

    if (username == undefined){
        username = null;
    }
    if (role == undefined){
        role = null;
    }
    
    return { props: { username, role} };
  };