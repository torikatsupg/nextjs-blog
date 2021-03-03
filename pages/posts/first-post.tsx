import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function hoge () {
  return (
    <Layout>
      <Head>
        <title>first post</title>
      </Head>
      <h1>FirstPost</h1>
      <Link href="/">
        <a>back to home</a>
      </Link>
    </Layout>
  );
}