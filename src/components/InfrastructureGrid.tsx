import { Info } from "lucide-react";

const InfrastructureGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-6">
            بنية تحتية وخدمات
          </h2>
          
          <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 rounded-xl bg-icon/20">
                <Info className="h-6 w-6 text-icon-dark" />
              </div>
              <div>
                <p className="text-foreground leading-relaxed text-base lg:text-lg">
                  لأننا نلتزم بالشفافية التامة مع عملائنا، عند تواصلك معنا، سيقوم أحد ممثلينا بتوضيح حالة المرافق الحالية، ومراحل إيصال الخدمات، وكافة التفاصيل الفنية للمخطط بدقة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureGrid;
