import { Home, TrendingUp, MapPinned } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ValuePropositionProps {
  onOpenModal: () => void;
}

const ValueProposition = ({ onOpenModal }: ValuePropositionProps) => {
  const values = [
    {
      icon: Home,
      title: "سكينة وخصوصية",
      description: "بيئة سكنية مثالية للعائلات، بعيدًا عن صخب المدينة وبالقرب من كافة الخدمات",
    },
    {
      icon: TrendingUp,
      title: "فرص استثمارية واعدة",
      description: "تخطيط عمراني ذكي يعزز من قيمة العقار مستقبلًا، سواء للبناء أو إعادة البيع",
    },
    {
      icon: MapPinned,
      title: "موقع استراتيجي",
      description: "ربط حيوي بالطرق الرئيسية يجعلك على بعد دقائق من أهم معالم الطائف",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-5 leading-tight">
            لماذا "ملقا الطائف" هو وجهتك القادمة؟
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            لأننا ندرك أن شراء الأرض هو قرار العمر، يحقق لك "ملقا الطائف" المعادلة الصعبة: سكن راقٍ في منطقة هادئة، وقيمة استثمارية تتضاعف، بفضل النمو العمراني المتسارع في شمال الطائف.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-bronze/30 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-3 lg:p-4 rounded-xl bg-gradient-to-br from-bronze/15 to-bronze/5 w-fit mb-5 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="h-7 w-7 lg:h-8 lg:w-8 text-bronze-dark" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">{value.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" onClick={onOpenModal} className="text-base">
            اكتشف تفاصيل أكثر!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
