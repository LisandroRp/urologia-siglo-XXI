import { JSX } from "react";

interface SectionProps {
  id: string;
  children: JSX.Element;
}

export const Section = ({ id, children }: SectionProps) => (
  <section id={id.split("#")[1]}>
    {children}
  </section>
);