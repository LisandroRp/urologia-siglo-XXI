import Image from "next/image";
import classNames from "classnames";
import { norberto } from './Norberto';
import { urologia } from "./Urologia";
import FadeImageCarousel from "./FadeCarousel";
import { images } from '../../core/theme/images';
import Description from './Description';

interface InfoSectionProps {
  type: string;
  reverse?: boolean;
}

export const InfoSection = ({ type, reverse = false }: InfoSectionProps) => {

  const info = { norberto, urologia }
  const slug = info[type]
  const containerClassNames = classNames({
    "flex-col lg:flex-row": !reverse,
    "flex-col lg:flex-row-reverse": reverse
  })
  return (
    <div className={`min-h-screen w-full flex justify-center px-4 py-16 bg-blue-50`}>
      <div className={`flex max-w-6xl mx-auto gap-10 flex-col-reverse ${containerClassNames}`}>
        <div className="flex justify-center h-full w-full lg:w-1/2  aspect-[16/9]">
          <FadeImageCarousel images={slug.images} />
        </div>
        <div className="flex flex-col justify-center w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-blue-700">{slug.title}</h2>
          <h3 className="text-lg font-medium text-gray-700 mb-4">{slug.subtitle}</h3>
          <Description text={slug.description} highlights={slug.highlights} />
          {slug.button ?
            <a
              href={slug.button.onClick}
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition w-fit"
            >
              {slug.button.title}
            </a>
            : <></>
          }
        </div>
      </div>
    </div>
  );
};
