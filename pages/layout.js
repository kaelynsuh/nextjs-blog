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

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@lilsnackdaily" />
        <meta property="twitter:title" content="Lil Snack" />
        <meta
          property="twitter:description"
          content="New pop-culture games & puzzles every day!"
        />
        <meta
          property="twitter:image"
          content="https://www.lilsnack.co/lil-snack-twitter-card.jpg"
        />
      </Head>
      <h2>HELLO</h2>
    </>
  );
}
