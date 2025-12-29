import { Home, TrendingUp, MapPinned } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ValuePropositionProps {
  onOpenModal: () => void;
}

const ValueProposition = ({ onOpenModal }: ValuePropositionProps) => {
  const values = [
    {
      icon: Home,
      title: "سكن عائلي هادئ",
      description: "بيئة هادئة ومناسبة للعائلات مع خصوصية تامة",
    },
    {
      icon: TrendingUp,
      title: "فرص استثمار وتطوير",
      description: "قطع متنوعة تناسب المشاريع التجارية والسكنية",
    },
    {
      icon: MapPinned,
      title: "سهولة وصول وخدمات قريبة",
      description: "قرب من الطرق الرئيسية والمرافق الحيوية",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            لماذا مخطط ملقا الطائف يخدم السكن والاستثمار؟
          </h2>
          <p className="text-lg text-muted-foreground">
            موقع يخدم أهدافك السكنية والاستثمارية ضمن بيئة متكاملة التخطيط والخدمات والمرافق… وقيمة تنمو مع الوقت.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-sage/30 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-4 rounded-xl bg-gradient-to-br from-sage/10 to-bronze/10 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="h-8 w-8 text-sage-dark" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" onClick={onOpenModal}>
            اطلب التفاصيل الآن
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
