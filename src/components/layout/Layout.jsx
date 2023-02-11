import Footer from '@/components/navigation/Footer';
import Navbar from '@/components/navigation/Navbar';

export default function Layout({ children }) {
	return (
		<div>
			<Navbar />
			{children}
      <Footer />
		</div>
	);
}
