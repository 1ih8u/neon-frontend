import React from 'react';
import ContactsHero from '../components/ContactsHero';
import ContactForm from '../components/ContactForm';
import ContactDetails from '../components/ContactDetails';
import MapSection from '../components/MapSection';

const ContactsPage = () => {
  return (
    <>
      <ContactsHero />
      <ContactForm />
      <ContactDetails />
      <MapSection />
    </>
  );
};

export default ContactsPage; 