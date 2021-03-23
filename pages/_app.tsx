// import App from 'next/app'
import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../src/components/GlobalStyles/GlobalStyles';
import { AnimateSharedLayout } from 'framer-motion';

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat:ital@0;1&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<AnimateSharedLayout>
				<Component {...pageProps} />
			</AnimateSharedLayout>{' '}
			<GlobalStyles />
		</>
	);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default App;
