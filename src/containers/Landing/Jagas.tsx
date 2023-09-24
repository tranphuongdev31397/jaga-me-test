import { IMAGES, SVGS } from "@/assets";
import { Image } from "@/components/Image";
import { Button } from "@/components/ui/button";
import { useViewport } from "@/contexts/ViewportProvider";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Slider, { type Settings } from "react-slick";

export interface JagasProps {}

export default function Jagas({}: JagasProps) {
  const [active, setActive] = useState({
    currentSlideIndex: 0,
  });

  const { width } = useViewport();

  const settings: Settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,

    appendDots: (dots) => {
      return (
        <ul style={{ bottom: "-50px" }}>
          {Array.isArray(dots) &&
            dots?.map((item) => {
              const { className, ...rest } = item.props;
              return (
                <li
                  key={item.key}
                  className={cn(" lg:!mx-2.5", className)}
                  {...rest}
                />
              );
            })}
        </ul>
      );
    },
    beforeChange: (prev: any, next: any) => {
      // here to detect slide change
      setActive({ currentSlideIndex: next });
    },
    customPaging: (pagi: number) => {
      const style = {
        width: width <= 1024 ? 10 : 18,
        height: width <= 1024 ? 10 : 18,
        display: "inline-block",
        borderRadius: "50%",
        background: "#BFBFBF",
      };
      const activeStyle = {
        width: width <= 1024 ? 10 : 18,
        height: width <= 1024 ? 10 : 18,
        borderRadius: "50%",
        display: "inline-block",
        background: "#E8847F",
      };
      return (
        <a
          className="slick-dot"
          style={pagi === active.currentSlideIndex ? activeStyle : style}
        />
      );
    },
  };
  return (
    <section className="bg-light-1 jaga relative py-[100px] ">
      <div className="jaga__containter flex flex-col-reverse lg:flex-row container  gap-[60px] lg:gap-[130px]">
        <div className="jaga__pros w-full lg:w-1/2">
          <h3 className="text-gray-1 text-[56px]/[62px] font-bold mb-[45px] mt-[30px] ">
            <span>Our </span>
            <span className="text-secondary-500">JagaPros</span>
          </h3>

          <p className="text-lg text-gray-1 mb-[50px]">
            We believe in the importance of the human touch. That is why we
            invest in building a solid team of nurses and care aides who are
            both technically skilled and caring at heart.
          </p>

          <div className="grid grid-cols-2 gap-[30px] mb-[70px]">
            <div className="flex flex-row gap-4 items-center">
              <Image
                className="max-w-[32px] h-auto w-full object-contain"
                src={SVGS.competent}
              />

              <span className="text-2xl text-gray-1 font-bold">Competent</span>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <Image
                className="max-w-[32px] h-auto w-full object-contain"
                src={SVGS.licensed}
              />

              <span className="text-2xl text-gray-1 font-bold">Licensed</span>
            </div>

            <div className="flex flex-row gap-4 col-span-2 items-center">
              <Image
                className="max-w-[28px] h-auto w-full object-contain"
                src={SVGS.experience}
              />

              <span className="text-2xl text-gray-1 font-bold">
                Experienced
              </span>
            </div>

            <div className="flex flex-row gap-4 col-span-2 items-center">
              <Image
                className="max-w-[28px] h-auto w-full object-contain"
                src={SVGS.personalInterview}
              />

              <span className="text-2xl text-gray-1 font-bold">
                Personally Interviewed
              </span>
            </div>

            <div className="flex flex-row gap-4 col-span-2 items-center">
              <Image
                className="max-w-[28px] h-auto w-full object-contain"
                src={SVGS.trained}
              />

              <span className="text-2xl text-gray-1 font-bold">
                Continuously Trained
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <Button className="h-[50px] min-w-[220px]" textStyle={"underline"}>
              <a
                className="w-full"
                href="https://www.jaga-me.com/pros/"
                target="_blank"
              >
                About JagaPros
              </a>
            </Button>
          </div>
        </div>
        <div className="jaga__slide w-full lg:w-1/2 relative z-10">
          <Slider {...settings}>
            <div>
              <img
                className="rounded-[30px] mx-auto overflow-hidden"
                src={IMAGES.jagasImg1}
              />
            </div>
            <div>
              <img
                className="rounded-[30px] mx-auto overflow-hidden"
                src={IMAGES.jagasImg2}
              />
            </div>
            <div>
              <img
                className="rounded-[30px] mx-auto overflow-hidden"
                src={IMAGES.jagasImg3}
              />
            </div>
          </Slider>
        </div>

        <div className="jaga__bg absolute right-0 top-[40px] z-[0]">
          <Image src={SVGS.jagas_bg1} />
        </div>
      </div>
    </section>
  );
}
