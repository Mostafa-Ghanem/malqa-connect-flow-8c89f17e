import { useEffect, useRef, useState, useCallback } from "react";
import { X, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadModal = ({ isOpen, onClose }: LeadModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const scriptLoadedRef = useRef(false);

  const handleMessage = useCallback((event: MessageEvent) => {
    if (event.data?.event === "Tally.FormSubmitted") {
      setIsSubmitted(true);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Batch style change with RAF to avoid forced reflow
      requestAnimationFrame(() => {
        document.body.style.overflow = "hidden";
      });

      // Load Tally script only once
      if (!scriptLoadedRef.current) {
        const script = document.createElement("script");
        script.src = "https://tally.so/widgets/embed.js";
        script.onload = () => {
          scriptLoadedRef.current = true;
          if ((window as any).Tally) {
            (window as any).Tally.loadEmbeds();
          }
        };
        document.body.appendChild(script);
      } else if ((window as any).Tally) {
        (window as any).Tally.loadEmbeds();
      }

      window.addEventListener("message", handleMessage);

      return () => {
        requestAnimationFrame(() => {
          document.body.style.overflow = "";
        });
        window.removeEventListener("message", handleMessage);
      };
    } else {
      requestAnimationFrame(() => {
        document.body.style.overflow = "";
      });
      setIsSubmitted(false);
    }
  }, [isOpen, handleMessage]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-card rounded-2xl shadow-elevated p-6 animate-scale-in max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 rounded-full hover:bg-muted transition-colors"
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="text-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                اطلب الأسعار وجدول القطع
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                توصلك التفاصيل + ملف PDF + خريطة + صورة المخطط
              </p>
              <p className="text-xs text-bronze-dark font-medium mt-2">
                ✓ رد خلال 24 ساعة — استشارة مجانية
              </p>
            </div>

            {/* Tally Form Embed */}
            <div className="min-h-[400px]">
              <iframe
                ref={iframeRef}
                data-tally-src="https://tally.so/embed/q4a7lY?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="429"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="مخطط ملقا الطائف"
                className="w-full"
              />
            </div>
          </>
        ) : (
          /* Success State */
          <div className="text-center py-8">
            <div className="inline-flex p-4 rounded-full bg-sage/10 mb-6">
              <CheckCircle className="h-12 w-12 text-sage" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              تم استلام طلبك بنجاح
            </h3>
            <p className="text-muted-foreground mb-8">
              نرسل لك التفاصيل في أقرب وقت
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="tel:8002486666">
                <Phone className="h-5 w-5" />
                اتصل الآن
              </a>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadModal;
