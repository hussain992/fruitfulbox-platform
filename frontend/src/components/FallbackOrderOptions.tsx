
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
    alert(
      "Message copied to clipboard! Visit wa.me or WhatsApp Web and paste it.",
    );
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
      <div className="bg-[var(--color-card)] rounded-lg shadow-lg p-6 text-center max-w-md mx-4">
        <p className="text-lg font-semibold text-[var(--color-foreground)] mb-4">
          Couldn&apos;t open WhatsApp?
        </p>
        <p className="text-sm text-[var(--color-muted-foreground)] mb-6">
          Try one of these alternatives:
        </p>
        <div className="space-y-3">
          <button
            onClick={handleCopyMessage}
            className="w-full bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            📋 Copy Message
          </button>
          <button
            onClick={handleWhatsAppWeb}
            className="w-full bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            💬 Open WhatsApp Web
          </button>
          <button
            onClick={handleCallDirectly}
            className="w-full bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            ☎️ Call Directly
          </button>
          <button
            onClick={onClose}
            className="w-full bg-[var(--color-muted)] hover:bg-[var(--color-border)] text-[var(--color-foreground)] px-4 py-2 rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default FallbackOrderOptions;
