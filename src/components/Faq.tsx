
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] =  [
  {"question": "What services do you offer?", 
   "answer": "We provide access to qualified lawyers for consultations, legal advice, document review, and representation in various legal matters such as criminal, family, corporate, and more."},

  {"question": "How do I book a lawyer?", 
   "answer": "Simply enter your legal issue, and we'll match you with a qualified lawyer available in your area. You can then schedule a consultation at your convenience."},

  {"question": "How much does it cost to consult a lawyer?", 
   "answer": "The consultation fees depend on the lawyer’s expertise and the nature of the case. You will be provided with an estimate before you book a session."},

  {"question": "Is the consultation private and confidential?", 
   "answer": "Yes, all your information and conversations with our lawyers are strictly confidential, protected by attorney-client privilege."},

  {"question": "How do I know if the lawyer is qualified?", 
   "answer": "We only work with certified and experienced lawyers who specialize in various legal fields. Each lawyer's credentials are verified before they can offer services through our platform."},

  {"question": "Can I get legal advice online?", 
   "answer": "Yes! You can chat with a lawyer online or book a video consultation. We make it convenient for you to access legal help remotely."},

  {"question": "Can I change my lawyer if I’m not satisfied?", 
   "answer": "Yes (we consider lawyer feedback as well), you can request a different lawyer if you feel that your current lawyer is not the right fit. We’ll assist you in making a new match."},

  {"question": "What types of legal issues can I get help with?", 
   "answer": "You can get legal help for a wide variety of issues, including family law, criminal law, business disputes, property law, employment law, and more."},

  {"question": "How do I make payment for services?", 
   "answer": "Payments are processed securely through our website. You can pay via credit/debit card or other online payment methods like UPI."},

  {"question": "How long will it take to get a response from a lawyer?", 
   "answer": "Once you submit your query, you will be matched with a lawyer in real time. Typically, you will receive a response within two hours, depending on availability."},

  {"question": "Are the lawyers available 24/7?", 
   "answer": "While not all lawyers are available 24/7 (depends on Jurisdiction and police station limits), our platform provides access to lawyers at different hours, ensuring you can get legal help when you need it most."},

  {"question": "Can I get help with document drafting or contract review?", 
   "answer": "Yes! We offer services like document review, contract drafting, and legal writing. You can send your documents for review or consult a lawyer for guidance."},

  {"question": "Do you offer services for businesses?", 
   "answer": "Absolutely! We offer services tailored to businesses, such as corporate legal advice, contract management, and dispute resolution."},

  {"question": "Is there a minimum consultation fee?", 
   "answer": "Consultation fees vary based on the lawyer and the nature of the legal issue. However, we ensure that the pricing is transparent and competitive."},

  {"question": "How do I cancel or reschedule an appointment?", 
   "answer": "You can easily cancel or reschedule your consultation through our platform. Just visit your booking details and make the necessary changes."},

  {"question": "Can I get a lawyer for court representation?", 
   "answer": "Yes (NOC required), many of our lawyers offer representation in court. Simply book a consultation, and we'll help you find a lawyer suited for court appearances."},

  {"question": "How do I know if I need a lawyer?", 
   "answer": "If you're unsure whether you need a lawyer, feel free to chat with one of our experts. They'll help you assess whether legal assistance is necessary."},

  {"question": "Do you have lawyers for international legal matters?", 
   "answer": "Yes (limited), we work with lawyers who specialize in international law and can assist you with cross-border legal issues."}
]


const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="bg-white section-spacing">
      <div className="legal-container">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-legal-light text-legal-DEFAULT font-medium text-sm mb-4">
            Got Questions?
          </span>
          <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
          <p className="text-legal-muted max-w-2xl mx-auto">
            Find answers to common questions about our legal services and processes. If you can't find what you're looking for, don't hesitate to contact us.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-legal-border last:border-0">
              <button
                className="w-full py-4 px-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-legal-accent" size={20} />
                ) : (
                  <ChevronDown className="text-legal-DEFAULT" size={20} />
                )}
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="p-6 pt-0 text-legal-muted">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
