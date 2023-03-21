import Footer from '../navigation/Footer';
import Navbar from '../navigation/Navbar';
import Line from '../tokens/Line';

export default function Layout({ children }) {
	return (
		<div>
			<Navbar />
			{children}
			<Line />
      <Footer />
		</div>
	);
}
