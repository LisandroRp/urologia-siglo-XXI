import { useState, useEffect } from "react";
import classNames from "classnames";
import { clinics } from "./ContactSection/Clinics";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { buildWhatsAppLink } from "@/core/helpers/_index";

export const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (open) {
      setShowContent(true);
      // Esperamos un ciclo de render antes de activar animación
      setTimeout(() => {
        setAnimateIn(true);
      }, 100);
    } else {
      setAnimateIn(false);
      const timer = setTimeout(() => setShowContent(false), 200);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const Card = ({ shortName, number }: { shortName: string; number: string }) => (
    <a
      href={buildWhatsAppLink(number)}
      target="_blank"
      rel="noopener noreferrer"
      title={`Enviar un Whats App a ${shortName}`}
      className="flex items-center gap-3 border border-green-500 rounded-lg p-3 hover:bg-green-50 transition-colors duration-200"
    >
      <FaWhatsapp className="text-green-500 text-xl" />
      <div className="text-sm leading-tight">
        <p className="font-semibold">{shortName}</p>
        <p className="text-gray-600">{number}</p>
      </div>
    </a>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {showContent && (
        <div
          className={classNames(
            "mb-3 w-72 px-4 py-3 rounded-xl shadow-lg bg-white text-black space-y-3 transform transition-all duration-200",
            animateIn
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          )}
        >
          {
            clinics.map((number) => (
              <Card {...number} />
            ))
          }
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer w-[60px] h-[60px] rounded-full bg-green-500 hover:opacity-80 shadow-lg flex items-center justify-center text-white text-2xl"
      >
        <div
          className={classNames(
            "transition-transform duration-500",
            open && "rotate-180"
          )}
        >
          {open ? <FaTimes /> : <FaWhatsapp size={33} />}
        </div>
      </button>
    </div>
  );
};
