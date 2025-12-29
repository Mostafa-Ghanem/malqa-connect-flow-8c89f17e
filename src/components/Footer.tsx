import { Phone, MapPin, Clock, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import footerLogo from "@/assets/footer-logo.png";
interface FooterProps {
  onOpenModal: () => void;
}
const WHATSAPP_LINK = "https://wa.me/966800248666";
const Footer = ({
  onOpenModal
}: FooterProps) => {
  return <footer className="bg-charcoal text-background py-10 lg:py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Final CTA */}
          <div className="text-center mb-10 lg:mb-14">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 leading-tight">
              احجز قطعتك اليوم، قبل اكتمال الحجوزات!
            </h2>
            <p className="text-background/70 mb-6 text-base sm:text-lg">
              مخطط ملقا الطائف — استثمار اليوم، وأمان الغد
            </p>
            <Button size="lg" onClick={onOpenModal} className="bg-primary text-charcoal hover:bg-primary/90 font-bold text-sm sm:text-base">
              اطلب الأسعار الآن
            </Button>
          </div>

          {/* Divider */}
          <div className="border-t border-background/10 my-8 lg:my-10" />

          {/* Contact Info */}
          <div className="text-center mb-6">
            <p className="text-base sm:text-lg font-semibold mb-6">للتواصل والاستفسار:</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-center mb-8 lg:mb-10">
            <a href="tel:8002486666" className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-background/5 hover:bg-background/10 transition-colors">
              <div className="p-2 sm:p-3 rounded-xl bg-background/10 mb-2 sm:mb-3">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <p className="text-xs sm:text-sm text-background/60 mb-1">هاتف</p>
              <p className="font-semibold text-sm sm:text-base" dir="ltr">800 248 6666</p>
            </a>

            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-background/5 hover:bg-background/10 transition-colors">
              <div className="p-2 sm:p-3 rounded-xl bg-background/10 mb-2 sm:mb-3">
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <p className="text-xs sm:text-sm text-background/60 mb-1">واتساب</p>
              <p className="font-semibold text-sm sm:text-base">تواصل معنا</p>
            </a>

            

            <div className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-background/5 col-span-2 lg:col-span-1">
              <div className="p-2 sm:p-3 rounded-xl bg-background/10 mb-2 sm:mb-3">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <p className="text-xs sm:text-sm text-background/60 mb-1">ساعات العمل</p>
              <p className="font-semibold text-sm sm:text-base">السبت - الخميس: 9 ص - 9 م</p>
            </div>
          </div>

          {/* Address */}
          <div className="text-center mb-8 lg:mb-10">
            <div className="inline-flex items-center gap-2 text-background/70 text-sm sm:text-base">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>شمال الطائف - المملكة العربية السعودية</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-background/10 my-8 lg:my-10" />

          {/* Logo & Copyright */}
          <div className="flex flex-col items-center gap-4">
            <img src={footerLogo} alt="مخطط ملقا الطائف" className="h-20 sm:h-24 md:h-32 w-auto" />
            <p className="text-xs sm:text-sm text-background/50">
              © {new Date().getFullYear()} مخطط ملقا الطائف. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;