import { Button } from "@/components/ui/button";

interface InventoryTableProps {
  onOpenModal: () => void;
}

const InventoryTable = ({ onOpenModal }: InventoryTableProps) => {
  const previewData = [
    { id: "A-12", usage: "سكني", area: "650 م²" },
    { id: "B-05", usage: "تجاري", area: "1200 م²" },
    { id: "C-08", usage: "سكني-تجاري", area: "880 م²" },
    { id: "A-23", usage: "سكني", area: "520 م²" },
    { id: "D-15", usage: "تجاري", area: "1350 م²" },
  ];

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
            جدول القطع المتاحة
          </h2>
          <p className="text-center text-muted-foreground mb-10 text-sm sm:text-base">
            عرض مختصر — للحصول على الجدول الكامل والأسعار المحدثة
          </p>

          {/* Table */}
          <div className="rounded-2xl border border-border overflow-hidden shadow-card bg-card">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50 border-b border-border">
                    <th className="px-6 py-4 text-right font-semibold text-foreground">رقم القطعة</th>
                    <th className="px-6 py-4 text-right font-semibold text-foreground">الاستخدام</th>
                    <th className="px-6 py-4 text-right font-semibold text-foreground">المساحة</th>
                    <th className="px-6 py-4 text-center font-semibold text-foreground">السعر</th>
                  </tr>
                </thead>
                <tbody>
                  {previewData.map((row, index) => (
                    <tr
                      key={row.id}
                      className="border-b border-border/50 hover:bg-muted/30 transition-colors animate-fade-in-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <td className="px-4 sm:px-6 py-4 font-medium text-foreground">{row.id}</td>
                      <td className="px-4 sm:px-6 py-4">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                          row.usage === "سكني" 
                            ? "bg-sage/15 text-sage-dark" 
                            : row.usage === "تجاري"
                            ? "bg-bronze/15 text-bronze-dark"
                            : "bg-muted text-muted-foreground"
                        }`}>
                          {row.usage}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">{row.area}</td>
                      <td className="px-6 py-4 text-center">
                        <Button variant="outline" size="sm" onClick={onOpenModal}>
                          اطلب سعرها
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Button variant="hero" size="lg" onClick={onOpenModal} className="text-base">
              اطلب أحدث جدول متاح
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              نرسل لك التفاصيل الكاملة + ملف PDF + الأسعار المحدثة
            </p>
            <p className="text-xs text-bronze-dark font-medium mt-2">
              ✓ القطع تنفذ بسرعة — احجز مكانك
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventoryTable;
