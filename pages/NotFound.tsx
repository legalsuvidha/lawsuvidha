
import React from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-4 py-16">
          <div className="inline-block p-6 rounded-full border-8 border-black mb-8">
            <h1 className="text-8xl font-bold font-serif">404</h1>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            We couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <Button asChild className="bg-black text-white hover:bg-gray-800">
            <a href="/">Return to Homepage</a>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
