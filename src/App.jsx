import Navbar from './components/Navbar';
import Home from './components/Home';
import WhyUs from './components/WhyUs';
import Popular from './components/Popular';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import { FormProvider } from './context/FormContext';
import Footer from './components/common/Footer';
import { useEffect, useState } from 'react';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <FormProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        
        <main className="flex-grow pt-16 lg:pt-20" role="main">
          {/* Home Section */}
          <section 
            id="home" 
            className="min-h-[calc(100vh-4rem)] py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
            aria-labelledby="home-title"
          >
            <h2 id="home-title" className="sr-only">Home</h2>
            <Home />
          </section>

          {/* Why Us Section */}
          <section 
            id="whyus" 
            className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white"
            aria-labelledby="whyus-title"
          >
            <h2 id="whyus-title" className="sr-only">Why Us</h2>
            <WhyUs />
          </section>

          {/* Popular Section */}
          <section 
            id="popular" 
            className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
            aria-labelledby="popular-title"
          >
            <h2 id="popular-title" className="sr-only">Popular</h2>
            <Popular />
          </section>

          {/* Services Section */}
          <section 
            id="services" 
            className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white"
            aria-labelledby="services-title"
          >
            <h2 id="services-title" className="sr-only">Services</h2>
            <Services />
          </section>

          {/* About Section */}
          <section 
            id="about" 
            className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
            aria-labelledby="about-title"
          >
            <h2 id="about-title" className="sr-only">About</h2>
            <About />
          </section>

          {/* Contact Section */}
          <section 
            id="contact" 
            className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white"
            aria-labelledby="contact-title"
          >
            <h2 id="contact-title" className="sr-only">Contact</h2>
            <Contact />
          </section>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </FormProvider>
  );
}

export default App;