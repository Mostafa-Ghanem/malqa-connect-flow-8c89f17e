import { Hospital, Plane, ShoppingBag, GraduationCap, Stethoscope, Route, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import landmarksMapImage from "@/assets/landmarks-map.jpg";

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/agBF6RcWVs51nzhZ6";

const NearbyLandmarks = () => {
  const landmarks = [
    { icon: Hospital, name: "مستشفى الأمير سلطان العسكري" },
    { icon: Plane, name: "مطار الطائف" },
    { icon: Route, name: "طريق السيل" },
    { icon: Stethoscope, name: "مركز صحي الواسط" },
    { icon: ShoppingBag, name: "ذا بارك مول" },
    { icon: Trophy, name: "مدينة الملك فهد الرياضية" },
    { icon: GraduationCap, name: "جامعة الطائف" },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-sage/5 to-bronze/5">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              المعالم المجاورة
            </h2>
            <p className="text-lg text-bronze-dark font-semibold mb-2">
              أنت في قلب الطائف الجديد
            </p>
            <p className="text-muted-foreground">
              موقعك في "ملقا الطائف" يجعلك جارًا لأهم المعالم الحيوية:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Map Image */}
            <a 
              href={GOOGLE_MAPS_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative rounded-2xl overflow-hidden bg-muted shadow-card block hover:shadow-lg transition-shadow"
            >
              <img 
                src={landmarksMapImage} 
                alt="موقع المشروع على الخريطة" 
                className="w-full h-auto object-contain"
              />
            </a>

            {/* Landmarks List */}
            <div className="space-y-3">
              {landmarks.map((landmark, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-soft animate-fade-in-up"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <div className="flex-shrink-0 p-3 rounded-xl bg-bronze/10">
                    <landmark.icon className="h-5 w-5 text-bronze-dark" />
                  </div>
                  <p className="font-medium text-foreground">{landmark.name}</p>
                </div>
              ))}
              
              <Button 
                variant="hero" 
                className="w-full mt-4"
                asChild
              >
                <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer">
                  عرض الموقع على الخريطة
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NearbyLandmarks;
