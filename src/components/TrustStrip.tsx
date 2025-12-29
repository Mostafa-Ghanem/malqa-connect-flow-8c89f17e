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
    <section className="py-12 bg-card border-y border-border">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-3 rounded-xl bg-sage/10 mb-4">
                <item.icon className="h-6 w-6 text-sage-dark" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
