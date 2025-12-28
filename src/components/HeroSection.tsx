import { MapPin, Maximize, Grid3X3, Ruler, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import aerialSunset from "@/assets/aerial-sunset.jpeg";

interface HeroSectionProps {
  onOpenModal: () => void;
}

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/agBF6RcWVs51nzhZ6";

const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  const stats = [
    { icon: Maximize, value: "77,000 م²", label: "مساحة إجمالية" },
    { icon: Grid3X3, value: "500 – 1400 م²", label: "مساحات القطع تقريبًا" },
    { icon: Ruler, value: "40 / 25 / 15 م", label: "عروض الشوارع" },
    { icon: Layers, value: "سكني + تجاري", label: "استخدامات متعددة" },
  ];

  return (
    <section className="relative pt-28 pb-12 lg:pt-32 lg:pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-4">
              مخطط ملقا الطائف
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-bronze-dark mb-6">
              149 قطعة سكنية وتجارية بشمال الطائف
            </p>

            {/* Tagline */}
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 mb-6">
              <p className="text-lg sm:text-xl font-bold text-foreground">
                فرصتك لامتلاك أرض المستقبل!
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
              خيارك الأمثل لبناء <span className="font-semibold text-foreground">"بيت العمر"</span> في حي يجمع بين الهدوء والخصوصية، أو لإطلاق مشروعك التجاري على شوارع حيوية.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              ضمن موقع استراتيجي يضمن لك سهولة الوصول، وجودة الحياة، بشمال الطائف.
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
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="hero" size="lg" onClick={onOpenModal} className="w-full sm:w-auto text-base">
                عرض الأسعار
              </Button>
              <Button variant="outline" size="lg" onClick={onOpenModal} className="w-full sm:w-auto">
                احجز زيارة للموقع
              </Button>
              <Button variant="secondary" size="lg" asChild className="w-full sm:w-auto">
                <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer">
                  <MapPin className="h-4 w-4" />
                  الموقع على قوقل ماب
                </a>
              </Button>
            </div>
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
                    <p className="font-semibold text-foreground">شمال الطائف</p>
                    <p className="text-sm text-muted-foreground">موقع استراتيجي متميز</p>
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
