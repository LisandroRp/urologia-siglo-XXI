import { useEffect, useState } from "react";
import { ClinicCards } from "./ClinicCards";
import { Spinner } from "@/components/_index";
import { IoCloseSharp } from "react-icons/io5";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export type tClinic = { id: number; name: string; shortName: string; address: string; number: string; }
export const clinics: tClinic[] = [
  {
    id: 1,
    name: "Las Toscas Office, Oficina 122",
    shortName: "Las Toscas Office, Canning",
    address: "Giribone 909, Canning",
    number: "+54 9 11 2298-6080"
  },
  {
    id: 2,
    name: "CICAS - Centro Integral Cañuelas de Atención en Salud",
    shortName: "CICAS, Cañuelas",
    address: "Florentino Ameghino 770, Cañuelas",
    number: "+54 9 11 3770-1199"
  }
]

export const Clinics = () => {
  const [selectedClinic, setSelectedClinic] = useState<tClinic | null>(null)
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (selectedClinic)
      setFlipped(true)
  }, [selectedClinic])

  useEffect(() => {
    if (!flipped)
      setSelectedClinic(null)
  }, [flipped])

  const onClick = (clinic: tClinic) => {
    setSelectedClinic(clinic)
  }

  return (
    <div className="px-6 md:px-12 flex w-full text-center flex-col">
      <div className="relative [perspective:1200px]">
        <div className={`flex flex-col gap-4 w-full transition-transform duration-700 [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""}`}>
          {
            clinics.map((clinic) => (<ClinicCards key={clinic.id} {...{ clinic, onClick }} />))
          }
          <div className="flex justify-center items-center absolute inset-0 rounded-xl overflow-hidden ring-1 ring-slate-200 bg-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <Spinner className="absolute text-blue-900 z-0" />
            {
              clinics.map((clinic) => {
                if (selectedClinic?.id === clinic.id)
                  return (
                    <iframe
                      key={clinic.id}
                      title={clinic?.name || ""}
                      className="h-full w-full z-10"
                      src={`https://www.google.com/maps?q=${encodeURIComponent(clinic?.address || "")}&output=embed`}
                      loading="lazy"
                    />
                  )
              })
            }
            <div className="absolute top-3 right-3 flex justify-center z-10">
              <button
                onClick={() => setFlipped(false)}
                className="inline-flex items-center gap-2 rounded-full bg-white/90 p-2 text-slate-900 shadow cursor-pointer"
              >
                <IoCloseSharp />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Redes sociales */}
      <div className="mt-12 flex justify-center gap-6 text-2xl text-gray-700">
        <a
          href="https://ar.linkedin.com/in/norberto-omar-rodriguez-b8b63590"
          target="_blank"
          rel="noopener noreferrer"
          title="LikedIn de Norberto Omar Rodriguez"
          className="hover:text-blue-700 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/urologiastuconsulta"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram de Urología Siglo XXI"
          className="hover:text-pink-600 transition-colors"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};
