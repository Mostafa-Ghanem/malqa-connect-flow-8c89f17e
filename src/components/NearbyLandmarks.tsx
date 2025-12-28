import { Hospital, Plane, ShoppingBag, GraduationCap, Stethoscope, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const NearbyLandmarks = () => {
  const landmarks = [
    { icon: Hospital, name: "مستشفى الملك سلمان التخصصي الجديد" },
    { icon: Plane, name: "مطار الطائف" },
    { icon: ShoppingBag, name: "مول ذا بارك" },
    { icon: GraduationCap, name: "جامعة الطائف" },
    { icon: Stethoscope, name: "مركز صحي الواسط" },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-sage/5 to-bronze/5">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-10">
            المعالم القريبة
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Map Placeholder */}
            <div className="relative rounded-2xl overflow-hidden bg-muted aspect-[4/3] shadow-card">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-sage mx-auto mb-3" />
                  <p className="text-muted-foreground">خريطة الموقع</p>
                </div>
              </div>
            </div>

            {/* Landmarks List */}
            <div className="space-y-4">
              {landmarks.map((landmark, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-soft animate-fade-in-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="flex-shrink-0 p-3 rounded-xl bg-bronze/10">
                    <landmark.icon className="h-5 w-5 text-bronze-dark" />
                  </div>
                  <p className="font-medium text-foreground">{landmark.name}</p>
                </div>
              ))}
              
              <Button variant="outline" className="w-full mt-4">
                عرض الموقع على الخريطة
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NearbyLandmarks;
