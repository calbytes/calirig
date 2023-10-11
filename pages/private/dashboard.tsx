import Layout from "../../components/layout";
import { getCookie } from 'cookies-next';

export default function Dashboard({ username, role }): JSX.Element  {
    return(
        <Layout title="Dashboard">
            {role && username ? 
            <div className="d-flex justify-content-center align-items-center">
                <p>Hello, {username}. Welcome to the Dashboard.</p>
            </div>
            :
            <div className="d-flex justify-content-center align-items-center">
                <p>To view more, login with your credentials...</p>
            </div>
            }
        </Layout>
      );
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var username = getCookie('usr', { req, res });
    var role = getCookie('role', { req, res })

    if (username == undefined){
        username = null;
    }
    if (role == undefined){
        role = null;
    }
    
    return { props: { username, role} };
  };