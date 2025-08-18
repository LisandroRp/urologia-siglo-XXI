import { images as covers } from "@/core/theme/images";
import { StaticImageData } from "next/image";

export type InfoItem = {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  button: {
    title: string;
    onClick: string;
  };
  highlights?: string[];
};

export const norberto: InfoItem = {
  title: "Dr. Norberto Rodríguez",
  subtitle: "Especialista en Urología",
  description: "Médico especialista en Cirugía General, Urología, Medicina Legal y Toxicología, con más de 30 años de trayectoria. Formado en la UBA, donde ejerció la docencia (Anatomía, Salud Pública, Cirugía, Urología y Medicina Legal) y cargos de gestión académica. Realizó residencia en Cirugía General (Hosp. Interzonal Finochietto, orientación en Proctología) y completó Urología en el Hosp. de Clínicas (UBA), donde fue Jefe e Instructor de Residentes, Jefe de Sala y de Urgencias. Su práctica se centra en oncología urológica, cirugía reconstructiva del piso pelviano, tratamiento de la incontinencia y cirugía mínimamente invasiva (láser, laparoscopía y robótica). Integró el Staff del Hospital César Milstein en cirugía oncológica y reconstructiva.",
  images: [covers.green2],
  button: {
    title: "Solicitar Turno",
    onClick: "#contacto"
  },
  highlights: [
    "UBA",
    "30 años",
    "láser",
    "laparoscopía",
    "robótica",
    "oncología urológica",
    "reconstructiva",
    "incontinencia",
  ]
}