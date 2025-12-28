import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileStickyBarProps {
  onOpenModal: () => void;
}

const MobileStickyBar = ({ onOpenModal }: MobileStickyBarProps) => {
  return (
    <div className="fixed bottom-0 right-0 left-0 z-50 lg:hidden bg-card/95 backdrop-blur-md border-t border-border shadow-elevated p-4">
      <div className="flex gap-3">
        <Button
          variant="heroOutline"
          className="flex-1"
          asChild
        >
          <a href="tel:8002486666">
            <Phone className="h-4 w-4" />
            اتصل الآن
          </a>
        </Button>
        <Button
          variant="hero"
          className="flex-1"
          onClick={onOpenModal}
        >
          اطلب الأسعار
        </Button>
      </div>
    </div>
  );
};

export default MobileStickyBar;
