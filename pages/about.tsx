import Layout from '../components/layout';
import Image from 'next/image';
import Link from 'next/link';

export default function About(): JSX.Element {
  return (
    <Layout title="About">
      <div className="container mx-auto my-5 px-4" style={{ maxWidth: '36rem' }}>
        <div className="d-flex flex-column align-items-center">
          <Image className="rounded-circle border"
            src="/images/cat.jpg"
            width={254} height={254}
            priority alt="pic of moi!"/>

          <div>
            <br/>
            <h3>About</h3>
          </div>
        </div>

        <p className="lead mb-3">
          Hey y'all, welcome to calirig.net; a repository of ideas, resources, services, etc...  
          Signup/Login to get more access. Contact me if you have any questions or comments. <br/>
          This platform is operated by a posse of evil kittens who are easily triggered ^_^ Donate 
          generously to avoid a catastrophy 
          ~ <Link href="https://paypal.me/calnyc" className="text-decoration-none" target="_blank" rel="noreferrer" 
            style={{color:"green"}}>xoxo</Link><br/>
        </p>
        <p>-CAL</p>

      </div>
    </Layout>
  );
}