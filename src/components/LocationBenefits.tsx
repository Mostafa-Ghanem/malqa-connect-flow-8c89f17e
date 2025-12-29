import { Check } from "lucide-react";

const LocationBenefits = () => {
  const benefits = [
    "سهولة الوصول إلى الطرق الرئيسية داخل الطائف",
    "مناسب للسكن العائلي والاستثمار",
    "متكامل الخدمات",
    "قرب من مرافق حيوية",
    "تنوع مساحات يناسب: فلل / مشاريع / محلات وخدمات",
  ];

  return (
    <section className="py-16 bg-card">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-10">
            مميزات الموقع
          </h2>
          
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex-shrink-0 p-2 rounded-full bg-sage/20">
                  <Check className="h-5 w-5 text-sage-dark" />
                </div>
                <p className="text-foreground font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationBenefits;
