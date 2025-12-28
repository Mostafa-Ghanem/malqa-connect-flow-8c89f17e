import { ClipboardList, MessageCircle, MapPin, FileCheck } from "lucide-react";

const ProcessSteps = () => {
  const steps = [
    {
      icon: ClipboardList,
      number: "1",
      title: "سجل اهتمامك",
      description: "من خلال ملء النموذج",
    },
    {
      icon: MessageCircle,
      number: "2",
      title: "ستصلك رسالة بكافة التفاصيل",
      description: "شاملة: الأسعار + جدول القطع + ملفات توضيحية",
    },
    {
      icon: MapPin,
      number: "3",
      title: "حدد موعد للزيارة الميدانية",
      description: "لمعاينة أرضك على الطبيعة",
    },
    {
      icon: FileCheck,
      number: "4",
      title: "إتمام البيع",
      description: "وإنهاء الإجراءات فور حجزك للقطعة المطلوبة",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-sage/5 to-bronze/5">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-4">
            كيف تتم العملية؟
          </h2>
          <p className="text-center text-lg text-bronze-dark font-semibold mb-10">
            امتلك أرضك في 4 خطوات بسيطة
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-card border border-border shadow-soft animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 right-1/2 translate-x-1/2 w-8 h-8 rounded-full bg-button text-button-foreground flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="p-4 rounded-xl bg-bronze/10 w-fit mx-auto mb-4 mt-2">
                  <step.icon className="h-8 w-8 text-bronze-dark" />
                </div>
                
                {/* Content */}
                <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
