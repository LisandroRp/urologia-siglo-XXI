import { JSX } from "react";

export interface CarouselItemProps {
  id: number;
  name: string;
  icon: JSX.Element;
  classNames: string;
  description: string;
}

export const CarouselItem = ({ name, description, icon, classNames }: CarouselItemProps) => (
  <div className={`border-t-4 flex flex-col justify-center items-center bg-gray-100 h-full p-6 rounded-xl text-center hover:shadow-md transition-transform duration-200 ease-in-out hover:scale-105 ${classNames}`}>
    {icon}
    <h3 className="text-xl text-black font-semibold mb-1">{name}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
)
