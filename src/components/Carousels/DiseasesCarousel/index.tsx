import { Carousel } from "..";
import { FaStethoscope } from 'react-icons/fa';
import { GiKidneys, GiDroplets } from "react-icons/gi";
import { FaToilet, FaHeartbeat } from "react-icons/fa";

const diseases = [
  {
    id: 1,
    icon: <GiKidneys className="text-4xl text-blue-600 mb-2" />,
    name: "Cálculos Renales",
    description: "Piedras en los riñones que causan dolor agudo.",
    classNames: "border-blue-600"
  },
  {
    id: 2,
    icon: <GiDroplets className="text-4xl text-blue-600 mb-2" />,
    name: "Incontinencia Urinaria",
    description: "Pérdida involuntaria del control de la vejiga.",
    classNames: "border-blue-600"

  },
  {
    id: 3,
    icon: <FaHeartbeat className="text-4xl text-blue-600 mb-2" />,
    name: "Disfunción Eréctil",
    description: "Dificultad para mantener una erección.",
    classNames: "border-blue-600"
  },
  {
    id: 4,
    icon: <FaToilet className="text-4xl text-blue-600 mb-2" />,
    name: "Hiperplasia Prostática",
    description: "Agrandamiento benigno de la próstata.",
    classNames: "border-blue-600"
  },
  {
    id: 5,
    icon: <FaStethoscope className="text-4xl text-blue-600 mb-2" />,
    name: "Cistitis",
    description: "Inflamación de la vejiga, a menudo por infección.",
    classNames: "border-blue-600"
  },
  {
    id: 6,
    icon: <FaToilet className="text-4xl text-blue-600 mb-2" />,
    name: "Prostatitis",
    description: "Inflamación de la próstata que causa dolor y molestias.",
    classNames: "border-blue-600"
  },
];

export const DiseasesCarousel = () => {
  return (<Carousel items={diseases} title="Consultas" description="Chequeos, estudios y seguimiento personalizado" classNames="bg-[#E8F0FE]" />
  );
};
