import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function RockMyBox() {
    return (
        <Layout>
            <Head>
                <title>Calirig</title>
            </Head>
            
            <section className={utilStyles.headingMd}>
                <p>Rock This Box</p>
            </section>
        </Layout>
    );
}