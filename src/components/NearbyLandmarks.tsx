import { useState } from "react";
import { Hospital, Plane, ShoppingBag, GraduationCap, Stethoscope, Route, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadModal from "./LeadModal";

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/agBF6RcWVs51nzhZ6";

const NearbyLandmarks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const landmarks = [{
    icon: Hospital,
    name: "مستشفى الأمير سلطان العسكري"
  }, {
    icon: Plane,
    name: "مطار الطائف"
  }, {
    icon: Route,
    name: "طريق السيل"
  }, {
    icon: Stethoscope,
    name: "مركز صحي الواسط"
  }, {
    icon: ShoppingBag,
    name: "ذا بارك مول"
  }, {
    icon: Trophy,
    name: "مدينة الملك فهد الرياضية"
  }, {
    icon: GraduationCap,
    name: "جامعة الطائف"
  }];

  return (
    <>
      <section className="py-12 lg:py-16 bg-gradient-to-br from-icon/5 to-bronze/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 lg:mb-10">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3">
                المعالم المجاورة
              </h2>
              <p className="text-base sm:text-lg text-bronze-dark font-semibold mb-2">
                أنت في قلب الطائف الجديد
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                موقعك في "ملقا الطائف" يجعلك جارًا لأهم المعالم الحيوية:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start">
              {/* Map Image */}
              <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="relative rounded-2xl overflow-hidden bg-muted shadow-card block hover:shadow-lg transition-shadow">
                <img alt="موقع المشروع على الخريطة" className="w-full h-auto object-contain" src="/lovable-uploads/1c6b43f0-53e6-4f2a-8b56-6d388c268fea.webp" />
              </a>

              {/* Landmarks List */}
              <div className="space-y-2 sm:space-y-3">
                {landmarks.map((landmark, index) => (
                  <div key={index} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-card border border-border shadow-soft animate-fade-in-up" style={{
                    animationDelay: `${index * 60}ms`
                  }}>
                    <div className="flex-shrink-0 p-2 sm:p-3 rounded-xl bg-icon/20">
                      <landmark.icon className="h-4 w-4 sm:h-5 sm:w-5 text-icon-dark" />
                    </div>
                    <p className="font-medium text-sm sm:text-base text-foreground">{landmark.name}</p>
                  </div>
                ))}
                
                <Button variant="hero" className="w-full mt-4" onClick={() => setIsModalOpen(true)}>
                  احجز قطعتك الآن — سجل بياناتك
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default NearbyLandmarks;
