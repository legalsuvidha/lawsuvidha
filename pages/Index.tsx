
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Expertise from '@/components/Expertise';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import FAQSection from '@/components/Faq';
import DisclaimerModal from '@/pages/Disclaimer'

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <DisclaimerModal/>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Expertise />
        <Testimonials />
        <div id="faq">
          <FAQSection />
        </div>
      </main>
      <Footer />
      {/* <ChatBot /> */}
    </div>
  );
};

export default Index;
