import { images as covers } from "@/core/theme/images";

export const urologia = {
  title: "Urología Siglo XXI",
  subtitle: "Diagnóstico y tratamiento integral — Canning y Cañuelas",
  description:
    "Fundado y dirigido por el Dr. Norberto Rodríguez, el Centro de Urología Siglo XXI ofrece urología de alta complejidad con enfoque mínimamente invasivo. Atendemos en Canning y Cañuelas y tratamos: hiperplasia prostática (HPB), cáncer de próstata, litiasis urinaria (cálculos), incontinencia masculina y femenina, estrechez uretral, disfunción sexual y patología escrotal/peniana, además de procedimientos selectos de cirugía general (hernias, hemorroides y lesiones genitales). Incorporamos tecnología de última generación como láser GreenLight (vaporización prostática), Rezum (terapia con vapor de agua), cirugía bipolar, laparoscopía y robótica, priorizando menor sangrado, rápida recuperación y corta internación cuando es posible. Realizamos estudios y procedimientos en instituciones de la zona de Canning y articulamos cirugías/derivaciones en centros de CABA cuando corresponde. Turnos disponibles en ambas sedes.",
  images: [covers.green2, covers.rezum],
  highlights: [
    "HPB",
    "cáncer de próstata",
    "litiasis",
    "incontinencia",
    "estrechez uretral",
    "GreenLight",
    "Rezum",
    "cirugía bipolar",
    "laparoscopía",
    "robótica"
  ],
} as const;