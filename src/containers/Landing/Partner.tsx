import { IMAGES, SVGS } from "@/assets";
import { Image } from "@/components/Image";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";

export interface PartnerProps {}

const PARTNERS = [
  {
    id: "hca",
    img: IMAGES.partner_hca,
  },
  {
    id: "singcancer",
    img: IMAGES.partner_singcancer,
  },
  {
    id: "singhealth",
    img: IMAGES.partner_singhealth,
  },
  {
    id: "touch",
    img: IMAGES.partner_touch,
  },
  {
    id: "awwa",
    img: IMAGES.partner_awwa,
  },
  {
    id: "aic",
    img: IMAGES.partner_aic,
  },
  {
    id: "stlukes",
    img: IMAGES.partner_stlukes,
  },
  {
    id: "tantock",
    img: IMAGES.partner_tantock,
  },
  {
    id: "singhealth2",
    img: IMAGES.partner_singhealth2,
  },
];

export default function Partner({}: PartnerProps) {
  return (
    <div className="partner bg-white relative z-10 py-[140px]">
      <div className="relative z-10 container flex justify-center flex-col gap-[35px]">
        <Title title="Partners" />

        <div className="mx-auto  justify-center  gap-[25px] items-center rounded-[20px] flex flex-row flex-wrap max-w-[1080px] mt-2.5 shadow-default bg-light-1 p-[30px]  md:p-[60px] lg:py-[75px]  lg:px-[110px]">
          {PARTNERS.map((partner) => (
            <Image
              className="max-w-[100px] md:max-w-[150px] h-auto object-contain w-full"
              src={partner.img}
              key={partner.id}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="h-[50px] min-w-[220px]" textStyle={"underline"}>
            <a
              className="w-full"
              href="https://www.jaga-me.com/partners/"
              target="_blank"
            >
              Partner With Us
            </a>
          </Button>
        </div>
      </div>
      <div className="jaga__bg absolute left-0 top-[140px] z-[0]">
        <Image src={SVGS.jagas_bg2} />
      </div>
    </div>
  );
}
