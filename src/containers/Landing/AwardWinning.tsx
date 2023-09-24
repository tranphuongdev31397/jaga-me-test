import { IMAGES } from "@/assets";
import { Image } from "@/components/Image";
import Title from "@/components/Title";
import * as React from "react";

export interface AwardWinningProps {}

const AWARDS = [
  {
    id: "eldercare",
    img: IMAGES.award_eldercare,
  },
  {
    id: "gcic",
    img: IMAGES.award_gcic,
  },
  {
    id: "president",
    img: IMAGES.award_president,
  },
  {
    id: "income",
    img: IMAGES.award_income,
  },
  {
    id: "singtel",
    img: IMAGES.award_singtel,
  },
];

export default function AwardWinning(props: AwardWinningProps) {
  return (
    <div className="award bg-light-1">
      <div className="flex flex-col gap-[45px] container">
        <Title title="Award Winning Service" />
        <div className="mx-auto mb-[-100px]  justify-center  gap-[25px] items-center rounded-[20px] flex flex-row flex-wrap max-w-[1080px] shadow-default bg-light-1 p-[30px]  md:p-[60px] lg:py-[40px]  lg:px-[60px]">
          {AWARDS.map((award) => (
            <Image
              className="max-w-[100px] md:max-w-[150px] h-auto object-contain w-full"
              src={award.img}
              key={award.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
