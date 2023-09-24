import { IMAGES, SVGS } from "@/assets";
import { BookingItem } from "@/containers/Landing/Booking";
import { PortalItem } from "@/containers/Landing/CustomerPortal";
import { Service } from "@/containers/Landing/OurServices";

export const HOME_MENU = [
  {
    id: "about_us",
    label: "About Us",
    children: [],
  },
  {
    id: "our_services",
    label: "Our Services",
    children: [],
  },
  {
    id: "jaga_career",
    label: "Jaga Careers",
  },
  {
    id: "jaga_guides",
    label: "Jaga Guides",
    children: [],
  },
  {
    id: "covid_19",
    label: "COVID-19",
  },
  {
    id: "contact_us",
    label: "Contact Us",
  },
];

export const SERVICES: Service[] = [
  {
    id: "nurse",
    icon: IMAGES.nurse,
    label: "Home\nNursing",
  },
  {
    id: "caregiving",
    icon: IMAGES.caregiving,
    label: "Home\nCaregiving",
  },
  {
    id: "medical",
    icon: IMAGES.medical,
    label: "Home\nMedical",
  },
  {
    id: "covid19",
    icon: IMAGES.mask,
    label: "Covid-19\n",
  },
];

export const BOOKINGS: BookingItem[] = [
  {
    id: "care",
    img: IMAGES.bookingImg1,
    title: "Care Consult",
    desc: "Consult our care coordinators and let them guide you through your care journey.",
  },
  {
    id: "booking",
    img: IMAGES.bookingImg2,
    title: "Book an Appointment",
    desc: "Simply make an account and book your appointment on our Customer Portal to get care at your own convenience.",
  },
  {
    id: "care_journey",
    img: IMAGES.bookingImg3,
    title: "Your Caregiving journey begins",
    desc: "Our Care Coordinator will give you a call to confirm your appointment and organise the care you require.",
  },
];

export const PORTAL_STEPS: PortalItem[] = [
  {
    id: "register",
    icon: SVGS.userCall,
    title: "Register",
    desc: "Sign up on our Customer Portal for free to gain access to our care services and resources",
  },
  {
    id: "booking",
    icon: SVGS.userAdd,
    title: "Book an Appointment",
    desc: "Choose your preferred service at your own time and convenience",
  },
  {
    id: "contact",
    icon: SVGS.calendarTime,
    title: "We will Contact You",
    desc: "Your appointment will be confirmed upon receiving a call from our Care Coordinator",
  },
];

export const FOOTER_SERVICES = [
  {
    title: "About Us",
    services: [
      {
        label: "Vision and Values",
        url: "#",
      },
      {
        label: "Partners",
        url: "#",
      },
      {
        label: "Media",
        url: "#",
      },
      {
        label: "Data Security and Trust",
        url: "#",
      },
      {
        label: "Join Us",
        url: "#",
      },
      {
        label: "Contact Us",
        url: "#",
      },
    ],
  },
  {
    title: "Our Services",
    services: [
      {
        label: "Home Nursing",
        url: "#",
      },
      {
        label: "Home Caregiving",
        url: "#",
      },
      {
        label: "Home Medical",
        url: "#",
      },
      {
        label: "COVID-19",
        url: "#",
      },
    ],
  },
  {
    title: "Jaga Career",
    services: [
      {
        label: "Nurses",
        url: "#",
      },
      {
        label: "Care Aides",
        url: "#",
      },
      {
        label: "Doctors",
        url: "#",
      },
    ],
  },
  {
    title: "Jaga Guides",
    services: [
      {
        label: "Health Resources",
        url: "#",
      },
      {
        label: "Finance Resources",
        url: "#",
      },
      {
        label: "Care Issue",
        url: "#",
      },
    ],
  },
  {
    title: "COVID-19",
    services: [
      {
        label: "Pre-Event Testing",
        url: "#",
      },
      {
        label: "Home Swab/Serology Test",
        url: "#",
      },
    ],
  },
];
