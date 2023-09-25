import { IMAGES, SVGS } from "@/assets";
import { Image } from "@/components/Image";
import Title from "@/components/Title";
import { PORTAL_STEPS } from "@/constants";

export interface CustomerPortalProps {}

export default function CustomerPortal({}: CustomerPortalProps) {
  return (
    <div className="portal bg-gray-3 pt-[120px] pb-[235px]">
      <Title title="Customer Portal" />

      <div className="portal__container mt-5 justify-center container flex flex-col lg:flex-row gap-10 items-center">
        <div className="portal__intro min-w-max flex flex-col gap-10">
          <div className="portal__intro-item flex gap-[58px] items-center whitespace-nowrap">
            <Image
              className="max-w-[45px] w-full h-[45px] object-contain"
              src={SVGS.handChecked}
            />

            <p className="text-2xl/[26px] font-bold text-gray-1">
              Competent
              <span className="text-primary-500 max-xs:block">
                {" "}
                Professionals
              </span>
            </p>
          </div>
          <div className="portal__intro-item flex gap-[58px] items-center">
            <Image
              className="max-w-[45px] w-full h-[45px] object-contain"
              src={SVGS.heart}
            />

            <p className="text-2xl/[26px] font-bold text-gray-1">
              Compassionate
              <span className="text-primary-500 max-xs:block"> JagaPros</span>
            </p>
          </div>
          <div className="portal__intro-item flex gap-[58px] items-center">
            <Image
              className="max-w-[45px] w-full h-[45px] object-contain"
              src={SVGS.cellphone}
            />

            <p className="text-2xl/[26px] font-bold text-gray-1">
              Convenient
              <span className="text-primary-500 max-xs:block"> Booking</span>
            </p>
          </div>
        </div>

        <div className="ml-5 portal__review flex flex-col sm:flex-row items-center gap-10">
          <div className="portal__phone w-full lg:max-xl:max-w-[200px] max-w-[280px]">
            <Image
              className="w-full h-auto object-contain "
              src={IMAGES.iPhoneLogo}
            />
          </div>

          <div className="flex-1 portal__steps flex flex-col gap-20">
            {PORTAL_STEPS.map((portal, idx) => (
              <PortalStep step={idx + 1} key={portal.id} portal={portal} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export interface PortalItem {
  id: string;
  icon: string;
  title: string;
  desc: string;
}

interface PortalStepsProps {
  portal: PortalItem;
  step: number;
}

const PortalStep = ({ portal, step }: PortalStepsProps) => {
  return (
    <div className="portal__step flex items-center md:flex-row flex-col gap-[30px]">
      <div className="aspect-square rounded-full w-[50xp] h-[50px] xl:w-[76px] xl:h-[76px] bg-gray-1 flex   justify-center items-center">
        <span className="text-light-1 text-4xl xl:text-[56px]/[62px] font-bold">
          {step}
        </span>
      </div>

      <div className="portal__step-info w-full flex flex-row gap-5 items-center">
        <Image
          className="max-w-[45px] w-full h-[45px] object-contain"
          src={portal.icon}
        />

        <div className="flex flex-col gap-2.5">
          <h5 className="lg:max-xl:text-2xl xs:text-[32px] text-2xl  font-bold text-gray-1">
            {portal.title}
          </h5>
          <p className="lg:max-xl:text-sm xs:text-[16px]/[22.4px] text-sm max-w-[300px]  text-gray-1 whitespace-normal">
            {portal.desc}
          </p>
        </div>
      </div>
    </div>
  );
};
