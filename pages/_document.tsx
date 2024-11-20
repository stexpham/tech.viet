import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Adsense } from '../components/adsense/AutoadsScript';
import { GA_TRACKING_ID } from '../lib/gtag';
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <Adsense />
          <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="rede" data-description="Support me on Buy me a coffee!" data-message="" data-color="#BD5FFF" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}