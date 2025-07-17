
import React from 'react';
import { Scale, FileText, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Scale className="w-10 h-10" />,
      title: "Legal Consultation",
      description: "Expert advice on legal matters with a personalized approach tailored to your specific situation and needs."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Legal Representation",
      description: "Professional representation in court proceedings, negotiations, and other legal forums to protect your interests."
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Document Drafting",
      description: "Precise drafting of legal documents including contracts, agreements, wills, and other important paperwork."
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Our Legal Services</h2>
          <p className="paragraph">Comprehensive legal solutions tailored to meet your unique requirements with precision and care.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:transform hover:-translate-y-1"
            >
              <div className="mb-6 text-black">{service.icon}</div>
              <h3 className="heading-sm mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
