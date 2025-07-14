import { useState } from 'react';
import AdvantagesSection from "../components/AdvantagesSection";
import CategoriesSection from "../components/CategoriesSection";
import GiftSection from "../components/GiftSection";
import HeroSection from "../components/HeroSection";
import PricingSection from "../components/PricingSection";
import SurveyModal from '../components/SurveyModal';
import VideoSection from "../components/VideoSection";
import WorkflowSection from "../components/WorkflowSection";

function HomePage() {
  const [isSurveyOpen, setSurveyOpen] = useState(false);

  return (
    <>
      <HeroSection onOpenSurvey={() => setSurveyOpen(true)} />
      <AdvantagesSection />
      <GiftSection onOpenSurvey={() => setSurveyOpen(true)} />
      <CategoriesSection />
      <VideoSection />
      <WorkflowSection />
      <PricingSection />
      <SurveyModal isOpen={isSurveyOpen} onClose={() => setSurveyOpen(false)} />
    </>
  );
}

export default HomePage; 