import { useState } from "react";
import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import ValueProposition from "@/components/ValueProposition";
import SpecsBlock from "@/components/SpecsBlock";
import LocationBenefits from "@/components/LocationBenefits";
import InfrastructureGrid from "@/components/InfrastructureGrid";
import NearbyLandmarks from "@/components/NearbyLandmarks";
import MasterPlanViewer from "@/components/MasterPlanViewer";
import InventoryTable from "@/components/InventoryTable";
import ProcessSteps from "@/components/ProcessSteps";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";
import MobileStickyBar from "@/components/MobileStickyBar";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen">
      {/* SEO Meta - handled by Helmet in production */}
      <StickyHeader onOpenModal={openModal} />
      
      <main>
        <HeroSection onOpenModal={openModal} />
        <TrustStrip />
        <ValueProposition onOpenModal={openModal} />
        <SpecsBlock />
        <LocationBenefits />
        <InfrastructureGrid />
        <NearbyLandmarks />
        <MasterPlanViewer />
        {/* InventoryTable removed as requested */}
        <ProcessSteps />
        <FAQSection />
      </main>

      <Footer onOpenModal={openModal} />
      
      {/* Mobile Sticky Bar */}
      <MobileStickyBar onOpenModal={openModal} />
      
      {/* Lead Capture Modal */}
      <LeadModal isOpen={isModalOpen} onClose={closeModal} />
      
      {/* Bottom padding for mobile sticky bar */}
      <div className="h-20 lg:hidden" />
    </div>
  );
};

export default Index;
