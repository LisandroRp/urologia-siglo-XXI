import { Carousel } from "..";
import { CiPill } from "react-icons/ci";
import { TbWind } from "react-icons/tb";
import { FaSyringe, FaUserMd, FaCut, FaMicroscope } from "react-icons/fa";

const treatments = [
  {
    id: 1,
    icon: <TbWind className="text-4xl text-green-600 mb-2" />,
    name: "Rezum",
    description: "Terapia de vapor para tratar la Hiperplasia Prostática.",
    classNames: "border-green-500"
  },
  {
    id: 2,
    icon: <FaMicroscope className="text-4xl text-green-600 mb-2" />,
    name: "Láser Green",
    description: "Cirugía con láser para reducir el tamaño de la próstata.",
    classNames: "border-green-500"
  },
  {
    id: 3,
    icon: <FaCut className="text-4xl text-green-600 mb-2" />,
    name: "Vasectomía",
    description: "Procedimiento quirúrgico para la anticoncepción masculina.",
    classNames: "border-green-500"
  },
  {
    id: 4,
    icon: <FaSyringe className="text-4xl text-green-600 mb-2" />,
    name: "Laparoscopía",
    description: "Cirugía mínimamente invasiva para tratar afecciones urológicas.",
    classNames: "border-green-500"
  },
  {
    id: 5,
    icon: <FaUserMd className="text-4xl text-green-600 mb-2" />,
    name: "Tratamiento de Disfunción",
    description: "Abordajes médicos y quirúrgicos para la disfunción eréctil.",
    classNames: "border-green-500"
  },
  {
    id: 6,
    icon: <CiPill className="text-4xl text-green-600 mb-2" />,
    name: "Terapia Hormonal",
    description: "Tratamiento para cáncer de próstata o disfunción hormonal.",
    classNames: "border-green-500"
  },
];

export const TreatmentsCarousel = () => {
  return (<Carousel items={treatments} title="Tratamientos" description="Soluciones quirúrgicas y ambulatorias de última generación" classNames="bg-[#E6F4EA]" />
  );
};
