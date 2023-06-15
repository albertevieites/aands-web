import Footer from '../navigation/Footer/Footer';
import Navbar from '../navigation/Navbar/Navbar';

export default function Layout({ children }) {
	return (
		<div>
			<Navbar />
			{children}
      <Footer />
		</div>
	);
}
