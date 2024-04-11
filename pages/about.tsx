import Layout from '../components/layout';
import Image from 'next/image';

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
            <h3>CaliRig</h3>
          </div>
        </div>

        <p className="lead mb-3">
          hey hi hello,
          <br/>
          i'm Carlos, a software engineer in NYC. i previously worked in an in-house cybersecurity org building access controls (I&AM) 
          & I also designed and developed manufacturing solutions w IoT devices in the early stages of a startup.
          <br/>
          Shoot me a msg to get access to my GitHub repos or to get a copy of my resume. 
        </p>
        
      </div>
    </Layout>
  );
}