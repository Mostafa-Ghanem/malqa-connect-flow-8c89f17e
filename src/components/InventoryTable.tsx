import { useState } from "react";
import { Button } from "@/components/ui/button";
interface InventoryTableProps {
  onOpenModal: () => void;
}
const InventoryTable = ({
  onOpenModal
}: InventoryTableProps) => {
  const [usageFilter, setUsageFilter] = useState<string>("all");
  const [areaFilter, setAreaFilter] = useState<string>("all");
  const previewData = [{
    id: "149",
    usage: "سكني/تجاري",
    area: "500 م²"
  }, {
    id: "148",
    usage: "سكني",
    area: "650 م²"
  }, {
    id: "147",
    usage: "تجاري",
    area: "1200 م²"
  }, {
    id: "146",
    usage: "سكني",
    area: "880 م²"
  }, {
    id: "145",
    usage: "سكني/تجاري",
    area: "1350 م²"
  }];
  const usageOptions = [{
    value: "all",
    label: "الكل"
  }, {
    value: "سكني",
    label: "سكني"
  }, {
    value: "تجاري",
    label: "تجاري"
  }, {
    value: "سكني/تجاري",
    label: "سكني/تجاري"
  }];
  const areaOptions = [{
    value: "all",
    label: "الكل"
  }, {
    value: "500-800",
    label: "500 - 800 م²"
  }, {
    value: "800-1100",
    label: "800 - 1100 م²"
  }, {
    value: "1100-1400",
    label: "1100 - 1400 م²"
  }];
  return <section className="py-16 lg:py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
            اختر قطعتك الآن!
          </h2>
          <p className="text-center text-muted-foreground mb-8 text-sm sm:text-base">
            جدول القطع المتاحة (عرض مختصر)
          </p>

          {/* Filters */}
          

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
                  {previewData.map((row, index) => <tr key={row.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors animate-fade-in-up" style={{
                  animationDelay: `${index * 50}ms`
                }}>
                      <td className="px-4 sm:px-6 py-4 font-medium text-foreground">{row.id}</td>
                      <td className="px-4 sm:px-6 py-4">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${row.usage === "سكني" ? "bg-sage/15 text-sage-dark" : row.usage === "تجاري" ? "bg-bronze/15 text-bronze-dark" : "bg-muted text-muted-foreground"}`}>
                          {row.usage}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">{row.area}</td>
                      <td className="px-6 py-4 text-center">
                        <Button variant="hero" size="sm" onClick={onOpenModal}>
                          اعرف السعر
                        </Button>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10 p-6 bg-muted/30 rounded-2xl border border-border">
            <p className="text-lg font-semibold text-foreground mb-4">
              للحصول على الجدول الكامل والأسعار
            </p>
            <Button variant="hero" size="lg" onClick={onOpenModal} className="text-base">
              ارسل لي السعر والتفاصيل
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default InventoryTable;