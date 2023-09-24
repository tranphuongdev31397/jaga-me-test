import { IMAGES } from "@/assets";
import { Image } from "@/components/Image";
import { Button } from "@/components/ui/button";
import { useViewport } from "@/contexts/ViewportProvider";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export interface HeroProps {}

export default function Hero(props: HeroProps) {
  const ref = useRef<any>(null);

  const { width } = useViewport();

  const [bgBoundClient, setBgBoundClient] = useState({
    width: undefined,
    height: undefined,
  });

  useLayoutEffect(() => {
    if (ref.current) {
      setBgBoundClient({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    }
  }, [width, ref.current]);

  return (
    <section className="max-md:container hero z-0  w-full max-lg:mt-5 h-full relative">
      <div
        style={{
          height: bgBoundClient?.height && `${bgBoundClient?.height}px`,
        }}
        className="absolute z-[-1] top-0 left-0 w-full h-full bg-gray-3"
      >
        <Image className="w-full h-full" src={IMAGES.heroBg} />
      </div>
      <div
        ref={ref}
        className="hero__content md:ml-[60px] md:mr-[30px] pb-[40px] flex flex-col-reverse md:flex-row items-center"
      >
        <div className="hero__title max-md:text-center flex-1">
          <p className="font-bold text-4xl lg:text-[56px]/[62px] text-primary-500">
            Your Trusted Specialist For Home Care
          </p>
          <p className="font-bold max-lg:text-sm  mt-2.5 tracking-[4.8px] text-gray-1">
            Where Compassion Meets Competency
          </p>

          <a href="https://www.jaga-me.com/about-us/" target="_blank">
            <Button
              className="min-w-[220px] h-[50px] mt-5 lg:mt-10"
              textStyle={"underline"}
            >
              About Us
            </Button>
          </a>
        </div>

        <div className="-ml-2.5 flex-1">
          <img
            className="aspect-square max-w-[75%] max-md:mx-auto md:max-w-[750px] w-full h-auto object-cover"
            src={IMAGES.heroFamily}
          />
        </div>
      </div>
    </section>
  );
}
