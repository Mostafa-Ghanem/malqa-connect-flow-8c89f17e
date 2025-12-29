import { Zap, Route, Droplets, Phone, Lightbulb, Trees, Building2 } from "lucide-react";

const InfrastructureGrid = () => {
  const infrastructure = [
    { icon: Zap, label: "كهرباء" },
    { icon: Route, label: "طرق" },
    { icon: Droplets, label: "صرف" },
    { icon: Phone, label: "هاتف" },
    { icon: Droplets, label: "مياه" },
    { icon: Lightbulb, label: "إنارة" },
    { icon: Trees, label: "حدائق" },
    { icon: Building2, label: "مساجد" },
    { icon: Building2, label: "مرافق عامة" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-4">
            البنية التحتية
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            تفاصيل توصيلات البنية تُوضح عند التواصل حسب مرحلة الخدمة
          </p>
          
          <div className="grid grid-cols-3 gap-4">
            {infrastructure.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-xl bg-card border border-border hover:border-sage/30 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="p-3 rounded-xl bg-sage/10 mb-3">
                  <item.icon className="h-6 w-6 text-sage-dark" />
                </div>
                <p className="font-medium text-foreground text-center">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureGrid;
