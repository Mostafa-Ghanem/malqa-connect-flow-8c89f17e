import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "ما هي أنواع استخدامات القطع المتاحة؟",
      answer: "تتوفر قطع سكنية وتجارية وسكنية-تجارية بمساحات متنوعة تناسب احتياجاتك سواء للسكن أو الاستثمار.",
    },
    {
      question: "ما هي المساحات المتوفرة؟",
      answer: "تتراوح مساحات القطع من 500 إلى 1400 متر مربع، مما يتيح خيارات متعددة للبناء والتطوير.",
    },
    {
      question: "هل يمكنني زيارة الموقع؟",
      answer: "نعم، يمكنك طلب زيارة ميدانية للموقع وسنتواصل معك لتحديد موعد مناسب.",
    },
    {
      question: "كيف أحصل على الأسعار؟",
      answer: "يمكنك طلب الأسعار من خلال النموذج المتاح في الصفحة وسنرسل لك جدول الأسعار المحدث فوراً.",
    },
    {
      question: "هل الأسعار قابلة للتغيير؟",
      answer: "الأسعار قد تتغير حسب السوق والتوفر. نوصي بطلب الجدول المحدث للحصول على أحدث الأسعار.",
    },
    {
      question: "ما هي خطوات الحصول على قطعة؟",
      answer: "بعد اختيار القطعة المناسبة، سيتم التواصل معك لإتمام إجراءات التملك والتوثيق.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-sage/5 to-bronze/5">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-10">
            الأسئلة الشائعة
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border shadow-soft px-6 data-[state=open]:shadow-card transition-shadow duration-300"
              >
                <AccordionTrigger className="text-right font-semibold text-foreground hover:text-primary py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
