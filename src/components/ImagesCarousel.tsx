import classNames from "classnames";
import { useWindowSize } from "@hooks";
import { tCarouselImages } from "@/features/Cover";

interface ImagesCarouselProps {
  images: ({ id: number } & tCarouselImages)[]
}

export const ImagesCarousel = ({ images }: ImagesCarouselProps) => {
  const { responsive } = useWindowSize();
  const totalImages = images.length * 2;

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
              <img
                alt="banner"
                src={image.src}
                className={classNames({
                  "object-top": image.direction == "top",
                  "h-full object-cover w-full": true,
                  "w-full": !responsive.lg,
                })}
              // priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
