import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

function HomePage() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero title="HELLO">
        <div className="space-x-4">
          <a className="button" target="_blank" href="https://github.com/Myoschen/tasks" rel="noreferrer">
            Documentation
          </a>
          <a className="button" target="_blank" href="https://twitter.com/willy14620" rel="noreferrer">
            Twitter
          </a>
        </div>
      </Hero>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default HomePage;
