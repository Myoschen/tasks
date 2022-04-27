import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

function HomePage() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero title="Hello !">
        <Link className="p-2 text-lg font-medium text-white rounded-md bg-nord-500" to="/tasks/dashboard">
          Get Started
        </Link>
      </Hero>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default HomePage;
