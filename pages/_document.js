import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <script src="https://code.jquery.com/jquery-3.6.0.js" async></script>
        <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js" async></script>
      </Head>
      <body className="overflow-x-hidden antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
