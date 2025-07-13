import ClientsHero from '../components/ClientsHero';
import ClientNav from '../components/ClientNav';
import DesignSection from '../components/DesignSection';
import MontageSection from '../components/MontageSection';
import WindowMontageSection from '../components/WindowMontageSection';
import DeliverySection from '../components/DeliverySection';
import PaymentSection from '../components/PaymentSection';
import TimelineSection from '../components/TimelineSection';
import WarrantySection from '../components/WarrantySection';

function ClientsPage() {
  return (
    <div className="bg-[#161616]">
      <ClientsHero />
      <ClientNav />
      <DesignSection />
      <MontageSection />
      <WindowMontageSection />
      <DeliverySection />
      <PaymentSection />
      <TimelineSection />
      <WarrantySection />
    </div>
  );
}

export default ClientsPage; 