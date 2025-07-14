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
      <div id="neon-signs">
        <NeonSignSection />
      </div>
      <div id="volumetric-letters">
        <VolumetricLettersSection />
      </div>
      <div id="light-cubes">
        <LightCubesSection />
      </div>
      <div id="plates">
        <PlatesSection />
      </div>
      <div id="printing">
        <PrintingSection />
      </div>
      <div id="non-standard-products">
        <NonStandardProductsSection />
      </div>
      <SurveyCtaSection />
    </>
  );
}

export default ServicesPage; 