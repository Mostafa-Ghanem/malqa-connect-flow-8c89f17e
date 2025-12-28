import { useState } from "react";
import { ZoomIn, Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import aerialTop from "@/assets/aerial-top.jpeg";
import LeadModal from "./LeadModal";

const MasterPlanViewer = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-8">
              صورة المخطط الكاملة
            </h2>
            
            {/* Plan Image */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-elevated cursor-pointer group"
              onClick={() => setIsLightboxOpen(true)}
            >
              <img
                src={aerialTop}
                alt="المخطط العام لمشروع ملقا الطائف"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-full bg-card/90 backdrop-blur-sm shadow-card">
                  <ZoomIn className="h-8 w-8 text-foreground" />
                </div>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <Button variant="hero" size="lg" onClick={() => setIsModalOpen(true)}>
                <Download className="h-5 w-5" />
                تحميل صورة المخطط
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            className="absolute top-4 left-4 p-3 rounded-full bg-card/20 hover:bg-card/40 transition-colors"
            onClick={() => setIsLightboxOpen(false)}
          >
            <X className="h-6 w-6 text-background" />
          </button>
          <img
            src={aerialTop}
            alt="المخطط العام لمشروع ملقا الطائف"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-elevated animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default MasterPlanViewer;
