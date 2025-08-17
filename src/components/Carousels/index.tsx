import { useRef, useEffect, useState } from "react";
import { useWindowSize } from "@/hooks/_index";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CarouselItem, CarouselItemProps } from "./CarouselItem";
import { breakpoints } from "@/core/helpers/responsiveBreakpoints";


interface CarouselProps {
  title: string,
  description: string;
  classNames?: string;
  items: CarouselItemProps[]
}

export const Carousel = ({ title, items, description, classNames }: CarouselProps) => {
  const { width } = useWindowSize();
  const carouselRef = useRef<HTMLDivElement>(null);
  const maxScroll = useRef(0);
  const [index, setIndex] = useState(0);

  const isLargeScreen = width && width > breakpoints.lg;

  const handlePrev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  };

  const handleNext = () => {
    if (carouselRef.current) {
      const pageCount = Math.ceil(
        carouselRef.current.scrollWidth / carouselRef.current.offsetWidth
      );
      setIndex((prev) => (prev + 1 < pageCount ? prev + 1 : 0));
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = index * carouselRef.current.offsetWidth;
    }
  }, [index]);

  useEffect(() => {
    if (carouselRef.current) {
      maxScroll.current =
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth;
    }
  }, [width]);

  useEffect(() => {
    if (isLargeScreen) return;

    const interval = setInterval(handleNext, 2500); // 3 segundos

    return () => clearInterval(interval);
  }, [index, isLargeScreen]);

  return (
    <div
      className={`flex flex-col justify-center py-10 px-4 ${classNames}`}
      style={{ minHeight: (width && width <= breakpoints.lg) ? "50vh" : "100vh" }}
    >
      <header className="text-center mb-10 lg:mb-18">
        <h2 className="text-black text-3xl font-bold text-center tracking-tight">{title}</h2>
        <p className="mt-2 text-lg text-slate-500">{description}</p>
      </header>
      <div className="max-w-6xl lg:mx-auto flex flex-col justify-center">
        {isLargeScreen ? (
          <div className="flex flex-wrap justify-center gap-6">
            {items.map((item) => (
              <div key={item.id} className="w-full sm:w-[calc(50%-12px)] xl:w-[calc(25%-18px)]">
                <CarouselItem {...item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="relative flex-1 flex items-center max-h-[50%]">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
              <button onClick={handlePrev} className="bg-white p-2 rounded-full shadow cursor-pointer">
                <FaArrowLeft color="black" />
              </button>
            </div>

            <div
              ref={carouselRef}
              className="md:pl-10 flex items-center gap-10 overflow-x-hidden scroll-smooth snap-x snap-mandatory h-full lg:h-[80%] w-full"
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  className="pl-[10%] md:pl-0 h-full w-[90%] md:w-[50%] snap-start shrink-0 px-2"
                >
                  <CarouselItem {...item} />
                </div>
              ))}
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
              <button onClick={handleNext} className="bg-white p-2 rounded-full shadow cursor-pointer">
                <FaArrowRight color="black" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
