const SpecsBlock = () => {
  const specs = [{
    label: "نوع المشروع",
    value: "سكني وتجاري"
  }, {
    label: "عدد القطع",
    value: "149"
  }, {
    label: "المساحة الإجمالية",
    value: "77,000 م²"
  }, {
    label: "متوسط مساحات القطع",
    value: "500 – 1400 م² تقريبًا"
  }, {
    label: "عرض الشوارع",
    value: "40 / 25 / 15 م"
  }];
  return <section className="py-12 lg:py-16 bg-gradient-to-br from-sage/5 to-bronze/5">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground text-center mb-8 lg:mb-10">
            تفاصيل المخطط
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {specs.map((spec, index) => <div key={index} style={{
            animationDelay: `${index * 80}ms`
          }} className="p-4 sm:p-5 lg:p-6 rounded-xl bg-card shadow-soft border border-border text-center animate-fade-in-up flex flex-col justify-center items-center">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-sage-dark mb-1 sm:mb-2">{spec.value}</p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-snug">{spec.label}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default SpecsBlock;