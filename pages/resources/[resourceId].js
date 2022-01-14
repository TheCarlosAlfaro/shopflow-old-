import Head from 'next/head';
import { useRouter } from 'next/router';

export default function ResourcePage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <Head>
        <title>Resource ID</title>
      </Head>

      <div>
        <h1>
          Welcome to <a href="#">Individual Resource.</a>
        </h1>
      </div>
    </div>
  );
}
