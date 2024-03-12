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
            <h3>Welcome to CaliRig</h3>
          </div>
        </div>

        <p className="lead mb-3">
          hey hi hello,
          <br/>
          i'm hosting a CTF on this site. feel free to tinker, but please, don't get messy. this is for educational purposes only and all activity is logged. 
          <br/><br/>
          clue 1) the key will look like this (it's dynamically generated): <b>&lt;CTF_your_hashed_ip&gt;&lt;256_char_key/&gt;</b>
          <br/><br/>
          clue 2) gingerbread cookies are on the table
          <br/><br/>
          have fun ^_^
        </p>
        <p>-CAL</p>

      </div>
    </Layout>
  );
}