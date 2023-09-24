import { SVGS } from "@/assets";
import { Image } from "@/components/Image";
import Logo from "@/components/Logo";
import { FOOTER_SERVICES } from "@/constants";

export interface FooterProps {}

export default function Footer({}: FooterProps) {
  return (
    <section className="footer relative bg-white pt-2.5 pb-[70px]">
      <div className="container flex flex-col lg:flex-row gap-[50px] lg:gap-[112px]">
        <div className="footer__address flex-col justify-center items-center flex gap-[25px]">
          <Logo />
          <div className="flex flex-row w-full max-lg:justify-center  gap-2.5">
            <Image
              src={SVGS.house}
              className="max-w-[24px] h-auto w-full object-contain"
            />
            <div className="text-gray-2 text-[13px] font-semibold">
              <p>77 Ayer Rajah Crescent</p>
              <p>#02-32,Singapore 139954</p>
            </div>
          </div>
          <div className="flex flex-row w-full max-lg:justify-center gap-2.5">
            <Image
              src={SVGS.clock}
              className="max-w-[24px] h-auto w-full object-contain"
            />
            <div className="text-gray-2 text-[13px] font-semibold">
              <p>8am - 5.30pm (Weekdays)</p>
              <p>8am - 12.30pm (Weekends)</p>
            </div>
          </div>
          <div className="flex flex-row w-full max-lg:justify-center gap-2.5">
            <Image
              src={SVGS.phone}
              className="max-w-[24px] h-auto w-full object-contain"
            />
            <div className="text-gray-2 text-[13px] font-semibold">
              <p>+65 6717 3737</p>
            </div>
          </div>

          <div className="flex flex-row w-full max-lg:justify-center gap-2.5">
            <Image
              src={SVGS.mail}
              className="max-w-[24px] h-auto w-full object-contain"
            />
            <div className="text-gray-2 text-[13px] font-semibold">
              <p>support@jaga-me.com </p>
              <p>(customer service queries)</p>
            </div>
          </div>
          <div className="block lg:hidden  footer__social">
            <Image src={SVGS.social_media} />
          </div>
        </div>

        <div className="footer__servies mt-[38px] flex flex-wrap flex-row w-full justify-start md:justify-between gap-[68px] flex-1">
          {FOOTER_SERVICES.map((item: any) => (
            <FooterService title={item.title} services={item.services} />
          ))}
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-[89px] right-[102px] footer__social">
        <Image src={SVGS.social_media} />
      </div>
    </section>
  );
}

interface FooterService {
  label: string;
  url: string;
}

const FooterService = ({
  title,
  services,
}: {
  title: string;
  services: FooterService[];
}) => {
  return (
    <div className="footer__service-item">
      <h3 className="font-bold text-black/80 text-base">{title}</h3>

      <ul className="flex flex-col gap-[5px]">
        {services.map((item: any) => (
          <li className="cursor-pointer text-sm/[25px] text-black/80">
            <a className="hover:underline" href="#">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
