import { FileText, MapPin, Zap, Car } from "lucide-react";

const TrustStrip = () => {
  const trustItems = [
    {
      icon: FileText,
      title: "بيانات واضحة",
      description: "مساحات/شوارع/استخدامات",
    },
    {
      icon: MapPin,
      title: "موقع مميز",
      description: "بحي الواسط",
    },
    {
      icon: Zap,
      title: "جاهزية بنية تحتية",
      description: "كهرباء/مياه/...",
    },
    {
      icon: Car,
      title: "زيارة ميدانية",
      description: "إرسال ملفات فورية",
    },
  ];

  return (
    <section className="py-10 lg:py-12 bg-card border-y border-border">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 lg:p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-2.5 lg:p-3 rounded-xl bg-icon/20 mb-3 lg:mb-4">
                <item.icon className="h-5 w-5 lg:h-6 lg:w-6 text-icon-dark" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 text-sm lg:text-base">{item.title}</h3>
              <p className="text-xs lg:text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
