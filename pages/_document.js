import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/papercss@1.9.2/dist/paper.min.css"
        />
        <link rel="icon" href="/new_york_times_icon.ico" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
