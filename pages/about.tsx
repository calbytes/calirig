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
          Hey Hi Hello!
          <br/>
          I'm a full-stack Software Engineer with a background in Cybersecurity (I&AM) and IoT Devices.
          I'm currently at a startup building Learning Management Systems (LMS) by leveraging LLMs. 
          I'm based in NYC and when I'm not working, I'm probably cycling, reading, or cooking.
          Feel free to contact me if you have any questions.
          <br/>
           - Carlos
        </p>
        
      </div>
    </Layout>
  );
}