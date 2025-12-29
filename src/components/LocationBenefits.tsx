import { Check } from "lucide-react";

const LocationBenefits = () => {
  const benefits = [
    "سهولة الدخول والخروج من وإلى أهم الطرق الرئيسية داخل الطائف",
    "مناسب للسكن العائلي والاستثمار العقاري",
    "مخطط متكامل الخدمات والمرافق",
  ];

  const usageTypes = [
    "الفلل السكنية",
    "مشاريع التطوير العقاري",
    "المحلات والخدمات التجارية",
  ];

  return (
    <section className="py-16 bg-card">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-10">
            مميزات الموقع
          </h2>
          
          <div className="space-y-4 mb-8">
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

          {/* Usage Types */}
          <div className="bg-bronze/5 border border-bronze/20 rounded-xl p-6">
            <p className="font-semibold text-foreground mb-4">تنوع مساحات يناسب:</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {usageTypes.map((type, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 rounded-lg bg-card border border-border"
                >
                  <Check className="h-4 w-4 text-bronze-dark flex-shrink-0" />
                  <span className="text-sm text-foreground">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationBenefits;
