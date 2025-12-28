import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "هل المخطط سكني أم تجاري؟",
      answer: "سكني وتجاري، حسب موقع القطعة المختارة.",
    },
    {
      question: "ما نطاق المساحات؟",
      answer: "تتراوح المساحات تقريبًا من 500 إلى 1400 م².",
    },
    {
      question: "هل يمكن زيارة الموقع قبل الحجز؟",
      answer: "نعم، بإمكانك ترتيب زيارة ميدانية ومعاينة المخطط كاملًا على الطبيعة.",
    },
    {
      question: "كيف أعرف الأسعار والقطع المتاحة؟",
      answer: "الأسعار تتفاوت حسب المساحة والموقع. سجل بياناتك الآن، وسيصلك ملف بآخر تحديث للقطع المتاحة وأسعارها.",
    },
  ];

  return (
    <section className="py-16 bg-card">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-4">
            أسئلة قد تدور في ذهنك
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            الأسئلة الشائعة
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-xl border border-border shadow-soft px-6 data-[state=open]:shadow-card transition-shadow duration-300"
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
