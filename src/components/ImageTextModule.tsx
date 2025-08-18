import { JSX } from 'react';
import classNames from 'classnames';
import { useWindowSize } from '@hooks';
import { ImagesCarousel } from './ImagesCarousel';
import Image, { StaticImageData } from "next/image";

interface ImageTextModuleProps {
  className?: string;
  children: JSX.Element;
  srcImages?: string[];
  direction?: "row" | "column"
  reverse?: boolean;
  maxImageWidth?: string;
  extraPadding?: boolean;
  alt?: string;
  isVideo?: boolean;
  mediaUrl?: string;
  fullImage?: boolean;
}

export function ImageTextModule({ children, srcImages, className, maxImageWidth, alt, direction = "row", reverse = false, extraPadding = false, isVideo = false, mediaUrl, fullImage = false }: ImageTextModuleProps) {

  const { responsive, } = useWindowSize();

  const containerClassNames = classNames({
    "lg:justify-between": direction === "row",
    "lg:flex-row-reverse": reverse && direction === "row",
    "flex-col-reverse": reverse && direction === "column",
    "lg:flex-row min-h-fit": direction === "row",
  });

  const imageContainerClassNames = classNames({
    // "lg:mr-10": reverse && direction === "row",
    // "lg:ml-10": !reverse && direction === "row",
    // "mt-10 mb-0": !reverse && direction === "column" || !responsive.lg,
    "mb-10": reverse && direction === "column" || !responsive.lg,
    "h-full": direction != "column",
    "md:p-20 !mb-10": extraPadding,
    "lg:max-w-[50%]": srcImages?.length == 1,
    "w-full": fullImage,
  });

  const videoClasses = classNames({
    "lg:max-w-1/2 md:p-10": isVideo === true,
  })

  function idsGenerator(array: string[]) {
    return array.map((item, index) => ({ id: index + 1, src: item }));
  }

  return (
    <div className={`flex relative -z-0 flex-col px-[8%] lg:mb-24 h-screen ${containerClassNames} ${className}`}>

      {children}

      <div className={`max-h-[80%] ${videoClasses} ${imageContainerClassNames} ${maxImageWidth}`}
      >
        {srcImages?.length ?
          srcImages?.length == 1 ?
            <img
              alt={alt ? alt : "Image"}
              className="h-full w-full object-contain"
              src={srcImages[0]}
            />
            : <ImagesCarousel images={idsGenerator([...srcImages, ...srcImages])} />
          : ''}
        {isVideo ? (
          <video
            className={``}
            src={mediaUrl}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : ''}
      </div>
    </div>
  );
}