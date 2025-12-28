import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

interface StickyHeaderProps {
  onOpenModal: () => void;
}

const StickyHeader = ({ onOpenModal }: StickyHeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-card py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="مخطط ملقا الطائف" className="h-10 md:h-12 w-auto" />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <span className="hidden lg:block text-xs text-muted-foreground">
            رد خلال وقت العمل – إرسال التفاصيل فورًا
          </span>
          
          <Button
            variant="heroOutline"
            size="sm"
            className="hidden sm:inline-flex"
            asChild
          >
            <a href="tel:8002486666">
              <Phone className="h-4 w-4" />
              اتصل الآن
            </a>
          </Button>

          <Button variant="hero" size="sm" onClick={onOpenModal}>
            اطلب الأسعار
          </Button>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;
