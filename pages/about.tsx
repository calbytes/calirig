import Layout from '../components/layout';
import Image from 'next/image';
import Link from 'next/link';

export default function About(): JSX.Element {
  return (
    <Layout title="About">
      <div className="container mx-auto my-5 px-4" style={{ maxWidth: '36rem' }}>
        <div className="d-flex flex-column align-items-center">
          <Image className="rounded-circle"
            src="/images/rig.jpg"
            width={254} height={254}
            priority alt="pic of moi!"/>

          <div>
            <h3>About</h3>
          </div>
        </div>

        <p className="lead mb-3">
          hey y'all, welcome to calirig.net; the place where you can find what you need :) i'll be
          showcasing my latest projects which involved some sort of tinkering with open source, 
          hardware, inf0$ec, etc. <br/>
          
          <Link href="/signup">Register</Link> an account to get access to more resources 8-P ... 
          <Link href="/contact"> Contact</Link> me if you have any questions or comments. this site is built 
          and maintained by a team of angry kittens and they need your m0ney! don't hesitate to make a 
          donation to the kitty fund ^_^ <br/>
        </p>
        <div className="float-end">
        -CAL
        </div>
      </div>
    </Layout>
  );
}