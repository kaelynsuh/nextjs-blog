import Head from "next/head";

export default function Layout() {
  return (
    <>
      <Head>
        <title>Lil Snack</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <script async src="https://tally.so/widgets/embed.js"></script>

        <meta
          name="description"
          content="New pop-culture games & puzzles every day!"
        />

        <meta property="og:title" content="Lil Snack" />
        <meta property="og:url" content="https://www.lilsnack.co/" />
        <meta
          property="og:description"
          content="New pop-culture games & puzzles every day!"
        />
        <meta
          property="og:image"
          content="https://www.lilsnack.co/assets/home-thumbnail.png"
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

        <meta
          name="google-adsense-account"
          content="ca-pub-2477754794012773"
        ></meta>

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
						!function(f,b,e,v,n,t,s)
						{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
						n.callMethod.apply(n,arguments):n.queue.push(arguments)};
						if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
						n.queue=[];t=b.createElement(e);t.async=!0;
						t.src=v;s=b.getElementsByTagName(e)[0];
						s.parentNode.insertBefore(t,s)}(window,document,'script',
						'https://connect.facebook.net/en_US/fbevents.js');
						fbq('init', '1784913425673905'); 
						fbq('track', 'PageView');
					`,
          }}
        />
        {/* End Meta Pixel Code */}
      </Head>
      <h2>HELLO</h2>
    </>
  );
}
