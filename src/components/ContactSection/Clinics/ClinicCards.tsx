import { buildWhatsAppLink } from "@/core/helpers/_index";
import { FaWhatsapp, } from "react-icons/fa";
import { tClinic } from ".";
import { FiMapPin } from "react-icons/fi";

interface ClinicCardsProps {
  clinic: tClinic;
  onClick: (clinic: tClinic) => void
}

export const ClinicCards = ({ clinic, onClick }: ClinicCardsProps) => {

  const { name, address, number } = clinic

  return (
    <div className="flex flex-col items-center shrink-0 text-black bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <div
        onClick={() => onClick(clinic)}
        rel="noopener noreferrer"
        className="mb-3 inline-flex items-center gap-2 text-slate-700 hover:underline cursor-pointer"
        title="Abrir en Google Maps"
      >
        <FiMapPin className="shrink-0" />
        {address}
      </div>
      <a
        href={buildWhatsAppLink(number)}
        target="_blank"
        rel="noopener noreferrer"
        title={`Enviar un Whats App a ${name}`}
        className="inline-flex items-center gap-2 text-green-600 hover:underline"
      >
        <FaWhatsapp size={22} /> {number}
      </a>
    </div>
  );
};
