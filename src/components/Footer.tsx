import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import footerLogo from "@/assets/footer-logo.png";

interface FooterProps {
  onOpenModal: () => void;
}

const Footer = ({ onOpenModal }: FooterProps) => {
  return (
    <footer className="bg-charcoal text-background py-14 lg:py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Final CTA */}
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 leading-tight">
              امتلك اليوم داخل مخطط يمنحك الهدوء والقيمة وسهولة الوصول
            </h2>
            <p className="text-background/70 mb-6 text-sm sm:text-base">
              احصل على جدول القطع المتاحة والأسعار المحدثة الآن
            </p>
            <Button 
              size="lg" 
              onClick={onOpenModal}
              className="bg-primary text-charcoal hover:bg-primary/90 font-bold text-base"
            >
              اطلب الأسعار
            </Button>
          </div>

          {/* Divider */}
          <div className="border-t border-background/10 my-10" />

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="p-3 rounded-xl bg-background/10 mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <p className="text-sm text-background/60 mb-1">هاتف</p>
              <a href="tel:8002486666" className="font-semibold text-lg hover:text-primary transition-colors" dir="ltr">
                800 248 6666
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="p-3 rounded-xl bg-background/10 mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <p className="text-sm text-background/60 mb-1">العنوان</p>
              <p className="font-semibold">حي الواسط - الطائف</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="p-3 rounded-xl bg-background/10 mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <p className="text-sm text-background/60 mb-1">ساعات العمل</p>
              <p className="font-semibold">الأحد - الخميس: 9 ص - 6 م</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-background/10 my-10" />

          {/* Logo & Copyright */}
          <div className="flex flex-col items-center gap-4">
            <img src={footerLogo} alt="مخطط ملقا الطائف" className="h-24 md:h-32 w-auto" />
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} مخطط ملقا الطائف. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
