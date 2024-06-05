import Head from "next/head";

export default function Layout() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Next.js blog" />
        <meta property="og:description" content="Next.js blog description" />
        <meta
          property="og:image"
          content="https://www.lilsnack.co/assets/home-thumbnail.jpg"
        />
        <meta property="og:image:type" content="image/png" />
      </Head>
      <h2>HELLO</h2>
    </>
  );
}
