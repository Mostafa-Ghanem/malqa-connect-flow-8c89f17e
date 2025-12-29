import { useState } from "react";
import { ZoomIn, X, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import aerialTop from "@/assets/aerial-top.jpeg";
import aerialSunset from "@/assets/aerial-sunset.jpeg";
import LeadModal from "./LeadModal";

const MasterPlanViewer = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    { src: aerialTop, alt: "المخطط العام لمشروع ملقا الطائف - منظر علوي" },
    { src: aerialSunset, alt: "مخطط ملقا الطائف - منظر جوي" },
    { src: "/lovable-uploads/88066aae-cd39-4e63-a997-c1c22e590a51.webp", alt: "مخطط ملقا الطائف - صورة إضافية" },
  ];

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
    setIsLightboxOpen(true);
  };

  return (
    <>
      <section className="py-12 lg:py-16 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground text-center mb-6 lg:mb-8">
              صورة المخطط الكاملة
            </h2>
            
            {/* Carousel */}
            <Carousel className="w-full" opts={{ loop: true, direction: "rtl" }}>
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div
                      className="relative rounded-2xl overflow-hidden shadow-elevated cursor-pointer group"
                      onClick={() => openLightbox(image.src)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-cover aspect-[16/10] transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-full bg-card/90 backdrop-blur-sm shadow-card">
                          <ZoomIn className="h-6 w-6 sm:h-8 sm:w-8 text-foreground" />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="right-auto left-2 sm:left-4 bg-card/80 backdrop-blur-sm border-border hover:bg-card h-8 w-8 sm:h-10 sm:w-10" />
              <CarouselNext className="left-auto right-2 sm:right-4 bg-card/80 backdrop-blur-sm border-border hover:bg-card h-8 w-8 sm:h-10 sm:w-10" />
            </Carousel>

            {/* Carousel indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-icon/40"
                />
              ))}
            </div>
            
            <div className="text-center mt-6">
              <Button variant="hero" size="lg" onClick={() => setIsModalOpen(true)}>
                سجل الآن واحصل على كافة التفاصيل
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
            src={lightboxImage}
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
