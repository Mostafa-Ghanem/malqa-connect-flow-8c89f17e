import { MapPin, Maximize, Grid3X3, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import aerialSunset from "@/assets/aerial-sunset.jpeg";

interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  const stats = [
    { icon: Maximize, value: "77,000 م²", label: "مساحة إجمالية" },
    { icon: Grid3X3, value: "500–1400 م²", label: "مساحات قطع متنوعة" },
    { icon: Ruler, value: "40 / 25 / 15 م", label: "عروض الشوارع المحيطة" },
    { icon: MapPin, value: "سكني + تجاري", label: "مرونة حسب هدفك" },
  ];

  return (
    <section className="relative pt-28 pb-12 lg:pt-32 lg:pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/10 text-sage-dark text-sm font-medium border border-sage/20">
                500–1400 م²
              </span>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-bronze/10 text-bronze-dark text-sm font-medium border border-bronze/20">
                77,000 م²
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-5">
              مخطط ملقا الطائف
              <span className="block text-bronze-dark mt-2">149 قطعة سكنية وتجارية</span>
              <span className="block text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground/80 mt-3">
                بحي الواسط
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              خيارك لبناء بيت العمر أو إطلاق مشروع عقاري واعد داخل حي الواسط — هدوء عمراني، سهولة وصول، وقرب من الطرق الرئيسية والخدمات اليومية.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-card shadow-soft border border-border/50 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-2 rounded-lg bg-bronze/15">
                    <stat.icon className="h-5 w-5 text-bronze-dark" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm sm:text-base">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" onClick={onOpenModal} className="w-full sm:w-auto text-base">
                استلم الأسعار + جدول القطع المتاحة
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              توصلك التفاصيل + ملف PDF + خريطة + صورة المخطط
            </p>
            <p className="text-xs text-bronze-dark font-medium mt-2">
              ✓ رد خلال 24 ساعة
            </p>
          </div>

          {/* Image Column */}
          <div className="order-1 lg:order-2 animate-fade-in delay-200">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-sage/20 to-bronze/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={aerialSunset}
                  alt="مخطط ملقا الطائف - منظر جوي"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-overlay" />
                <div className="absolute bottom-4 right-4 left-4">
                  <div className="bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-card">
                    <p className="font-semibold text-foreground">حي الواسط - الطائف</p>
                    <p className="text-sm text-muted-foreground">موقع استراتيجي قريب من الخدمات</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
