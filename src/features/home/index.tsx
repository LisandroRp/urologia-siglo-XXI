import { Cover } from "../Cover";
import { Section, ContactSection, DiseasesCarousel, TreatmentsCarousel, WhatsAppButton, InfoSection } from "@/components/_index";

export const MENU_LIST = [
  { id: 1, href: "#home", component: <Cover /> },
  { id: 2, text: "XXI", href: "#XXI", component: <InfoSection type="urologia" /> },
  { id: 3, text: "Norberto Rodriguez", href: "#norberto", component: <InfoSection reverse type="norberto" /> },
  // { id: 4, text: "Pablito Lescano", href: "#pablito", component: <InfoSection type="norberto" reverse /> },
  { id: 5, text: "Consultas", href: "#consultas", component: <DiseasesCarousel /> },
  { id: 6, text: "Tratamientos", href: "#tratamientos", component: <TreatmentsCarousel /> },
  { id: 7, text: "Contacto", href: "#contacto", component: < ContactSection /> },
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