import { useState } from "react";
import { Button } from "@/components/ui/button";

interface InventoryTableProps {
  onOpenModal: () => void;
}

const InventoryTable = ({ onOpenModal }: InventoryTableProps) => {
  const [usageFilter, setUsageFilter] = useState<string>("all");
  const [areaFilter, setAreaFilter] = useState<string>("all");

  const previewData = [
    { id: "A-12", usage: "سكني", area: "650 م²" },
    { id: "B-05", usage: "تجاري", area: "1200 م²" },
    { id: "C-08", usage: "سكني-تجاري", area: "880 م²" },
    { id: "A-23", usage: "سكني", area: "520 م²" },
    { id: "D-15", usage: "تجاري", area: "1350 م²" },
  ];

  const usageOptions = [
    { value: "all", label: "الكل" },
    { value: "سكني", label: "سكني" },
    { value: "تجاري", label: "تجاري" },
    { value: "سكني-تجاري", label: "سكني-تجاري" },
  ];

  const areaOptions = [
    { value: "all", label: "الكل" },
    { value: "500-800", label: "500–800 م²" },
    { value: "800-1100", label: "800–1100 م²" },
    { value: "1100-1400", label: "1100–1400 م²" },
  ];

  const filteredData = previewData.filter((item) => {
    if (usageFilter !== "all" && item.usage !== usageFilter) return false;
    return true;
  });

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-4">
            جدول القطع المتاحة
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            عرض مختصر — للحصول على الجدول الكامل والأسعار المحدثة
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-6 justify-center">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">الاستخدام:</span>
              <div className="flex gap-2">
                {usageOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setUsageFilter(option.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      usageFilter === option.value
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">المساحة:</span>
              <div className="flex gap-2">
                {areaOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setAreaFilter(option.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      areaFilter === option.value
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

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
                  {filteredData.map((row, index) => (
                    <tr
                      key={row.id}
                      className="border-b border-border/50 hover:bg-muted/30 transition-colors animate-fade-in-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <td className="px-6 py-4 font-medium text-foreground">{row.id}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                          row.usage === "سكني" 
                            ? "bg-sage/10 text-sage-dark" 
                            : row.usage === "تجاري"
                            ? "bg-bronze/10 text-bronze-dark"
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
          <div className="text-center mt-8">
            <Button variant="hero" size="lg" onClick={onOpenModal}>
              اطلب أحدث جدول متاح
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              نرسل لك التفاصيل الكاملة + ملف PDF + الأسعار المحدثة
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventoryTable;
