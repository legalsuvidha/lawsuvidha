
import React from 'react';
import { Heart, Briefcase, Shield } from 'lucide-react';

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Family Matters",
      description: "Expert guidance in divorce, child custody, adoption, and other family matters with compassion and understanding.",
      items: ["Family Matters", "Child Custody", "Adoption", "Disputes in Live-in"]
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Corporate Law",
      description: "Comprehensive legal services for businesses of all sizes, from startups to established corporations.",
      items: ["Legal documentation","consultation between (Employee-Employee)","consultation between(Employee-Employer)"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Criminal Law",
      description: "Strong defense strategies and representation for those facing criminal charges or investigations.",
      items: ["Criminal Defense", "White Collar Crimes","Juvenile Defense"]
    }
  ];

  return (
    <section id="expertise" className="py-16">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Areas of Expertise</h2>
          <p className="paragraph">Specialized knowledge and experience across various legal disciplines to address your specific needs.</p>
        </div>
        
        <div className="space-y-12">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/3 bg-gray-50 p-8 rounded-xl flex flex-col items-center text-center">
                <div className="mb-6 text-black">{area.icon}</div>
                <h3 className="heading-md mb-4">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {area.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="font-medium text-lg mb-2">{item}</div>
                    <div className="h-1 w-12 bg-black rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
