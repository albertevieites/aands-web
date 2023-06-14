import Layout from '../components/layout/Layout';

import '../styles/styles.scss';

export default function App({ Component, pageProps }) {
	return (
/* 			<div id='smooth-wrapper'>
				<div id='smooth-content'> */
					<Layout value>
						<Component {...pageProps} />
					</Layout>
	);
}
