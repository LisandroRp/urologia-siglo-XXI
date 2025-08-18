import { StaticImageData } from "next/image";
import { images } from "@/core/theme/images";
import { ImagesCarousel } from "@/components/_index";
import { useWindowSize } from "@/hooks/useWindowSize";
import { breakpoints } from "@/core/helpers/responsiveBreakpoints";

export const Cover = () => {
  const { width } = useWindowSize();
  const photos = [images.green1, images.rezum, images.toscas2, images.toscas3]
  function idsGenerator(array: string[]) {
    return array.map((item, index) => ({ id: index + 1, src: item }));
  }
  const titleClassNames = "transition-all text-5xl md:text-6xl font-bold uppercase whitespace-nowrap overflow-hidden border-r-4 border-white"
  return (
    <div className="h-[calc(100vh-65px)] mt-[65px] overflow-hidden bg-blue-50">
      <ImagesCarousel images={idsGenerator([...photos, ...photos])} />
      {/* Fondo negro con opacidad */}
      <div className="absolute inset-0 bg-black opacity-[66%] z-10" />
      {/* Texto centrado */}
      <div className="absolute flex flex-col inset-0 items-center justify-center z-20 text-center gap-5 text-blue-50">
        <div className="flex-col sm:flex-row ">
          {width && width >= breakpoints.sm
            ?
            <h1 className={`animate-typing ${titleClassNames}`}>
              UROLOGÍA SIGLO XXI
            </h1>
            :
            <>
              <h1 className={`animate-typing-mobile ${titleClassNames}`}>
                UROLOGÍA
              </h1>
              <h1 className={`animate-typing-mobile-delay ${titleClassNames}`}>
                SIGLO XXI
              </h1>
            </>
          }
        </div>
        <h2 className="fade-in fade-in-800 motion-reduce:transition-none motion-reduce:opacity-100 text-2xl md:text-2xl px-12 sm:px-40">Tecnología de vanguardia y más de 30 años de experiencia para el diagnóstico y tratamiento integral de las patologías urológicas</h2>
      </div>
    </div>
  );
}
