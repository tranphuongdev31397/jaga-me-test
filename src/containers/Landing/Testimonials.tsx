import { SVGS } from "@/assets";
import { Image } from "@/components/Image";
import Title from "@/components/Title";
import { cn } from "@/lib/utils";
import * as React from "react";
import Slider, { type Settings } from "react-slick";

export interface TestimonialsProps {}

export default function Testimonials(props: TestimonialsProps) {
  const [active, setActive] = React.useState({
    currentSlideIndex: 1,
  });

  const ref = React.useRef<any>();
  const settings: Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "25%",
    centerMode: true,
    beforeChange: (prev: any, next: any) => {
      // here to detect slide change
      setActive({ currentSlideIndex: next });
    },
    infinite: false,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          centerPadding: "15%",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "10%",
        },
      },
    ],
  };

  // React.useEffect(() => {
  //   console.log(ref);
  // }, [ref.current]);

  return (
    <div className="bg-light-1 pt-[100px] pb-[240px]">
      <Title title="Testimonials" />
      <div className="mt-[45px]">
        <Slider ref={ref} className="my-[20px]" {...settings}>
          <div className="">
            <TestimonialItem
              title="It is a service I highly recommend to others"
              desc="All we wanted was for the best medical attention for our mother, and her complete recovery. The most important factor in decision-making for us was the experience of nurses to handle the illnesses of the patient and their age. The nurses at Jaga-Me are kind and caring. It is a service I highly recommend to others in the same situation”"
              author={"Katherine"}
              active={active.currentSlideIndex === 0}
            />
          </div>

          <div>
            <TestimonialItem
              title="It is a service I highly recommend to others"
              desc="All we wanted was for the best medical attention for our mother, and her complete recovery. The most important factor in decision-making for us was the experience of nurses to handle the illnesses of the patient and their age. The nurses at Jaga-Me are kind and caring. It is a service I highly recommend to others in the same situation”"
              author={"Katherine"}
              active={active.currentSlideIndex === 1}
            />
          </div>
          <div>
            <TestimonialItem
              title="It is a service I highly recommend to others"
              desc="All we wanted was for the best medical attention for our mother, and her complete recovery. The most important factor in decision-making for us was the experience of nurses to handle the illnesses of the patient and their age. The nurses at Jaga-Me are kind and caring. It is a service I highly recommend to others in the same situation”"
              author={"Katherine"}
              active={active.currentSlideIndex === 2}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

const TestimonialItem = ({
  title,
  desc,
  author,
  active = true,
}: {
  title: string;
  desc: string;
  author: string;
  active?: boolean;
}) => {
  return (
    <div
      className={cn(
        "mx-auto gap-[25px] items-center rounded-[20px] h-[400px] max-w-[640px]  shadow-default bg-light-1 px-[25px] py-[45px] my-2.5",
        !active ? "grayscale opacity-50" : ""
      )}
    >
      <div className="text-center flex flex-col justify-between h-full">
        <h3 className="text-2xl/[26px] text-gray-1 font-bold">{title}</h3>
        <p className="text-gray-2 text-lg">{desc}</p>

        <Image
          src={SVGS.stars}
          className="max-w-[177px] h-auto w-full object-contain mx-auto"
        />

        <h3 className="text-[32px]/[35px] text-gray-1 font-bold">{author}</h3>
      </div>
    </div>
  );
};
