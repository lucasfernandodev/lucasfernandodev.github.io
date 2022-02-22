import '../styles/global/style.css';
import '../styles/variables/colors.css';
import '../styles/global/accessibility.css';
import '../styles/global/scrollbar.css';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
