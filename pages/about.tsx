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
            <h3>About Me</h3>
          </div>
        </div>

        <p className="lead mb-3">
          Hello!
          <br/>
          I'm a software engineer with a background in cybersecurity (I&AM) and IoT devices within the manufacturing industry. 
          I spend much of my time working with open source projects and hardware components; mostly in Python, C++, and Java environments.
          I'm based in NYC and when I'm not working on my projects, I'm probably cycling, reading, or cooking.
          <br/>
           - CAL
        </p>
        
      </div>
    </Layout>
  );
}