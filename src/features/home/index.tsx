import { Cover } from "../Cover";
import { Section, ContactSection, DiseasesCarousel, TreatmentsCarousel, WhatsAppButton, InfoSection } from "@/components/_index";

export const MENU_LIST = [
  { id: 1, href: "#home", component: <Cover /> },
  { id: 2, text: "XXI", href: "#XXI", component: <InfoSection type="urologia" />, title: "Conocé la clínica Urología Siglo XXI en Canning y Cañuelas" },
  { id: 3, text: "Norberto Rodriguez", href: "#norberto", component: <InfoSection reverse type="norberto" />, title: "Información sobre el Dr. Norberto Omar Rodríguez, especialista en urología" },
  // { id: 4, text: "Pablito Lescano", href: "#pablito", component: <InfoSection type="norberto" reverse /> },
  { id: 5, text: "Consultas", href: "#consultas", component: <DiseasesCarousel />, title: "Consultá sobre enfermedades urológicas y tratamientos disponibles" },
  { id: 6, text: "Tratamientos", href: "#tratamientos", component: <TreatmentsCarousel />, title: "Tratamientos urológicos con tecnología de última generación" },
  { id: 7, text: "Contacto", href: "#contacto", component: < ContactSection />, title: "Contactá a Urología Siglo XXI para turnos y consultas" },
];

export const Home = (props: any) => (
  <div>
    {
      MENU_LIST.map((menu) => (
        <Section key={menu.id} id={menu.href}>
          {menu.component}
        </Section>
      ))
    }
    <WhatsAppButton />
  </div>
);