import React from "react";

interface FallbackOrderOptionsProps {
  isOpen: boolean;
  messageText: string;
  onClose: () => void;
  phoneNumber: string;
}

const FallbackOrderOptions: React.FC<FallbackOrderOptionsProps> = ({
  isOpen,
  messageText,
  onClose,
  phoneNumber,
}) => {
  if (!isOpen) return null;

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(messageText);
    alert("Message copied to clipboard! Visit wa.me or WhatsApp Web and paste it.");
  };

  const handleWhatsAppWeb = () => {
    window.open("https://web.whatsapp.com", "_blank");
    onClose();
  };

  const handleCallDirectly = () => {
    window.location.href = `tel:+${phoneNumber}`;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 text-center max-w-md mx-4">
        <p className="text-lg font-semibold text-gray-800 mb-4">
          Couldn't open WhatsApp?
        </p>
        <p className="text-sm text-gray-600 mb-6">
          Try one of these alternatives:
        </p>
        <div className="space-y-3">
          <button
            onClick={handleCopyMessage}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            📋 Copy Message
          </button>
          <button
            onClick={handleWhatsAppWeb}
            className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            💬 Open WhatsApp Web
          </button>
          <button
            onClick={handleCallDirectly}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            ☎️ Call Directly
          </button>
          <button
            onClick={onClose}
            className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default FallbackOrderOptions;
