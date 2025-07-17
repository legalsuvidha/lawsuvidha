
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center z-0" 
           style={{ 
             backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')", 
             backgroundPosition: "center -14%",
             backgroundSize: "cover",
             backgroundRepeat: "no-repeat"
           }}>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="heading-xl mb-6 text-white">
              Professional Legal Solutions for Every Challenge
            </h1>
            <p className="paragraph mb-8 text-white/90">
              JP Law Suvidha provides expert legal services tailored to your needs. Our team of experienced attorneys is committed to delivering justice and peace of mind through comprehensive legal representation.
            </p>
            <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="btn-secondary border-white text-black hover:bg-white/20">
                Get Free Consultation
              </Button>
              <Button variant="outline" className="btn-secondary border-white text-black hover:bg-white/20">
                Know More
              </Button>
            </div>
          </div>
          {/* <div className="hidden md:block">
            <div className="relative animate-scale-in">
              <div className="w-full h-[500px] bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent text-white">
                  <div className="font-serif text-2xl font-semibold mb-2">Trusted Legal Partner</div>
                  <p className="text-white/80">With over 15 years of experience in various practice areas</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
