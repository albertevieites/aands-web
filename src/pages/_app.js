import { Analytics } from '@vercel/analytics/react';
import Layout from '../components/layout/Layout';
import '../styles/styles.scss';

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
			<Analytics />
		</Layout>
	);
}
