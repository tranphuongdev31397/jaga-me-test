import { Image } from "@/components/Image";
import Title from "@/components/Title";
import { SERVICES } from "@/constants";

export interface OutServicesProps {}

export interface Service {
  id: string;
  label: string;
  icon: string;
}

export interface ServiceItemProps {
  service: Service;
}

export default function OutServices({}: OutServicesProps) {
  return (
    <section className="bg-gray-3 pt-[60px] pb-[215px] relative z-10 ">
      <div className="flex flex-col gap-[45px] container">
        <Title title="Our Services" />

        <div className="justify-center md:max-w-[990px] md:mx-auto  grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-[30px] lg:gap-[50px]">
          {SERVICES.map((service) => (
            <ServiceItem service={service} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <div className="w-full h-full lg:w-[210px] lg:h-[252px]  shadow-service rounded-[20px] bg-light-1 p-5">
      <div className="flex flex-col h-full w-full gap-5 justify-around items-center">
        <Image
          className="max-w-[155px] w-full h-[108px] object-contain"
          src={service.icon}
        />
        <p className="text-center w-full text-gray-1 text-lg/17px font-bold whitespace-pre-wrap">
          {service.label}
        </p>
      </div>
    </div>
  );
};
