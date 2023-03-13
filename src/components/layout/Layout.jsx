import Burger from '../navigation/Burger';
import Footer from '../navigation/Footer';
import Navbar from '../navigation/Navbar';

export default function Layout({ children }) {
	return (
		<div>
			<Navbar />
			<Burger />
			{children}
      <Footer />
		</div>
	);
}
