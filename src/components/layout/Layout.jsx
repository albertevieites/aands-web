import Footer from '../navigation/Footer';
import Navbar from '../navigation/Navbar';

export default function Layout({ children }) {
	return (
		<div>
			<Navbar />
			{children}
      <Footer />
		</div>
	);
}
