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
    <section className="py-12 lg:py-16 bg-gradient-to-br from-sage/5 to-bronze/5">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground text-center mb-3">
            كيف تتم العملية؟
          </h2>
          <p className="text-center text-base sm:text-lg text-bronze-dark font-semibold mb-8 lg:mb-10">
            امتلك أرضك في 4 خطوات بسيطة
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative p-4 sm:p-6 rounded-2xl bg-card border border-border shadow-soft animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Step Number */}
                <div className="absolute -top-3 sm:-top-4 right-1/2 translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-button text-button-foreground flex items-center justify-center font-bold text-sm sm:text-lg">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="p-3 sm:p-4 rounded-xl bg-icon/20 w-fit mx-auto mb-3 sm:mb-4 mt-2">
                  <step.icon className="h-6 w-6 sm:h-8 sm:w-8 text-icon-dark" />
                </div>
                
                {/* Content */}
                <h3 className="font-bold text-foreground text-sm sm:text-base mb-1 sm:mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-snug">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
