import Layout from '../components/layout';
import Image from 'next/image';

export default function About(): JSX.Element {
  return (
    <Layout title="About">
      <div className="container mx-auto my-5 px-4" style={{ maxWidth: '36rem' }}>
        <div className="d-flex flex-column align-items-center">
          <Image className="rounded-circle"
            src="/images/moi.jpg"
            width={254} height={254}
            priority alt="pic of moi!"/>

          <div className="display-4 fw-bold lh-1.2 mb-4">www.calirig.net</div>
        </div>

        <p className="lead mb-3">
          Hey y'all, I'm Carlos. I'm a full stack software engineer with experience 
          in cybersecurity and R&D robotics/IoT devices. I'll be exhibiting some of my latest 
          projects here on my site. Register an account to get more access. Feel free to reach 
          out if you have any questions or comments.
        </p>
      </div>
    </Layout>
  );
}