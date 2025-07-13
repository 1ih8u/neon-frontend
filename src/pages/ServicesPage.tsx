import ServiceHero from '../components/ServiceHero';
import ServiceCategoriesSection from '../components/ServiceCategoriesSection';
import NeonSignSection from '../components/NeonSignSection';
import VolumetricLettersSection from '../components/VolumetricLettersSection';
import LightCubesSection from '../components/LightCubesSection';
import PlatesSection from '../components/PlatesSection';
import PrintingSection from '../components/PrintingSection';
import NonStandardProductsSection from '../components/NonStandardProductsSection';
import SurveyCtaSection from '../components/SurveyCtaSection';

function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <ServiceCategoriesSection />
      <NeonSignSection />
      <VolumetricLettersSection />
      <LightCubesSection />
      <PlatesSection />
      <PrintingSection />
      <NonStandardProductsSection />
      <SurveyCtaSection />
    </>
  );
}

export default ServicesPage; 