import { Image } from "@/components/Image";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { BOOKINGS } from "@/constants";

export interface Bookingrops {}

export interface BookingItem {
  id: string;
  title: string;
  img: string;
  desc: string;
}

export interface BookingItemProps {
  booking: BookingItem;
}

export default function Booking({}: Bookingrops) {
  return (
    <div className="bg-light-1 container booking py-[60px]">
      <div className="flex flex-col items-center gap-5 md:gap-10">
        <div className="booking__title inline-flex gap-2.5 md:mb-5 justify-center items-center text-center flex-wrap">
          <span className="font-bold text-4xl/[56spanpx] text-gray-1 font-mulish">
            Booking an appointment with
          </span>
          <Logo className="max-w-[157px] w-full h-[56px]" />
        </div>

        <div className="booking__step max-w-[1080px] flex flex-col md:flex-row flex-wrap gap-[60px]">
          {BOOKINGS.map((booking) => (
            <BookingItem booking={booking} key={booking.id} />
          ))}
        </div>
        <Button className="min-w-[220px] h-[50px]" textStyle={"underline"}>
          <a
            className="w-full"
            href="https://jagausers.au.auth0.com/login?state=hKFo2SBZYUFRYXlsTEowSVlBckpJT19abE11WlpzTzBjdzJ5UKFupWxvZ2luo3RpZNkgUzdCTG83bC1VTWhzOGtUelJVVU83VGsyaF9MaUROMW6jY2lk2SBFb1RnbmFoMXNsUE1oVjVLQ2lDNTZaRVRVdXkwMXF4Qg&client=EoTgnah1slPMhV5KCiC56ZETUuy01qxB&protocol=oauth2&audience=https%3A%2F%2Fjagausers.au.auth0.com%2Fuserinfo&scope=openid%20profile%20email&response_mode=query&response_type=code&redirect_uri=https%3A%2F%2Fmy.jaga-me.com%2Fauth0%2Fcallback"
            target="_blank"
          >
            Sign Up Now
          </a>
        </Button>
      </div>
    </div>
  );
}

const BookingItem = ({ booking }: BookingItemProps) => {
  return (
    <div className="flex flex-1 flex-col md:min-h-[468px]  max-md:text-center gap-10 booking__item">
      <div className="booking__item-img">
        <Image
          src={booking.img}
          className="max-w-[255px] w-full max-md:mx-auto"
        />
      </div>

      <div className="booking__item-content flex-1 flex flex-col gap-2.5">
        <h4 className="font-bold text-gray-1 text-2xl/[26.5px] flex-1">
          {booking.title}
        </h4>
        <p className="text-gray-2 text-lg/[25px] flex-[2]">{booking.desc}</p>
      </div>
    </div>
  );
};
