import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// components
import Button from '../components/Button/Button';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

// hooks
import useAuth from '../hooks/useAuth';

function HomePage() {
  const { currentUser, isLoading } = useAuth();
  const navigate = useNavigate();

  // When the user is already logged in, it will redirect to the dashboard
  useEffect(() => {
    if (currentUser) {
      navigate('/dashboard');
    }
  }, [navigate, currentUser]);

  if (isLoading) { return null; }

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero title="Welcome !">
        <div className="space-x-4">
          <Button handleClick={() => window.open('https://github.com/Myoschen/tasks', '_blank')}>
            Documentation
          </Button>
          <Button handleClick={() => window.open('https://twitter.com/willy14620', '_blank')}>
            Twitter
          </Button>
        </div>
      </Hero>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default HomePage;
