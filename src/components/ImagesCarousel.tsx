import { useWindowSize } from "@hooks";
import classNames from "classnames";
import Image, { StaticImageData } from "next/image";

interface ImagesCarouselProps {
  images: {
    id: number;
    src: StaticImageData;
  }[]
}

export const ImagesCarousel = ({ images }: ImagesCarouselProps) => {
  const { responsive } = useWindowSize();
  const totalImages = images.length * 2;

  const imageClassName = classNames({
    "h-full object-cover w-full": true,
    "w-full": !responsive.lg,
  });

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="w-full h-full animate-carousel">
        <div
          className="flex h-full"
          style={{ width: `${totalImages * 100}%` }}
        >
          {images.map((image, index) => (
            <div
              key={image.id}
              className="h-full"
              style={{ width: `${100 / totalImages}%` }}
            >
              <Image
                alt="banner"
                src={image.src}
                className={imageClassName}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
