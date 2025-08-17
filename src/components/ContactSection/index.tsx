import { Clinics } from './Clinics';
import { ContactForm } from './ContactForm';

export const ContactSection = () => {

  return (
    <div className="flex items-center flex-col min-h-screen bg-blue-50 py-14 px-4">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6">Contacto</h2>
      <div className="flex flex-col lg:flex-row justify-center items-center w-full">
        <ContactForm />
        <Clinics />
      </div>
    </div>
  );
};
