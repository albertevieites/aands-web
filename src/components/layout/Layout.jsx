import Footer from '../navigation/Footer/Footer';
import Navbar from '../navigation/Navbar/Navbar';
import Line from '../tokens/decorators/Line/Line';

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
