// components/DisclaimerModal.jsx
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function DisclaimerModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const accepted = Cookies.get("disclaimerAccepted");
    if (!accepted) {
      setShowModal(true);
    }
  }, []);

  const acceptDisclaimer = () => {
    Cookies.set("disclaimerAccepted", "true", { expires: 365 }); // 1 year
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg">
        <h2 className="text-lg font-semibold mb-2">Disclaimer</h2>
        <p className="text-sm text-gray-700 mb-4">
          This website is for informational purposes only and does not constitute legal advice. 
          By continuing, you acknowledge and accept this disclaimer.
        </p>
        <button
          onClick={acceptDisclaimer}
          className="bg-legal-DEFAULT text-white px-4 py-2 rounded hover:bg-black transition"
        >
          I Understand
        </button>
      </div>
    </div>
  );
}
