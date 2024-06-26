import afterImage from "../images/after-pic.jpg";
import beforeImage from "../images/before-pic.jpg";
import doctorProfile from "../images/doctor-profile.png";
import servicePlaceholder from "../images/services-placeholder.jpg";
import clinicPic from "../images/smile-clinic.png";

import reviewer from "../images/reviewer.jpg";

import type { LandingPage } from "../lib/types";

const year: number = new Date().getFullYear();

export const content: LandingPage = {
  title: "SaltLakeCity.dental",
  navItems: [
    {
      title: "Meet The Doctor",
      url: "#meet-the-doctor",
    },
    {
      title: "Services",
      url: "#services",
    },
    {
      title: "Blog",
      url: "/blog",
    },
    {
      title: "Documentation",
      url: "/docs",
    },
  ],
  navButton: {
    title: "Book a Consult",
    url: "#contact",
  },
  hero: {
    title: "High-End Dentistry and Smile Design",
    subtitle:
      "Preventative care, cosmetic dentistry, and modern implant solutions in Salt Lake City",
    button: {
      title: "Book a Consult",
      url: "#contact",
    },
  },
  meetTheDoctor: {
    title: "Meet The Doctor",
    doctorName: "Dr. Cierra Diamse",
    doctorDescription:
      "is committed to promoting a holistic approach to dental wellness. Her primary objective is to assist each patient in achieving a beautiful smile while also enjoying optimal oral health. Through the emphasis on preventative care and cosmetic excellence and the use of modern techniques combined with personalized attention, Dr. Diamse delivers unmatched service.",
    doctorProfile: doctorProfile,
    expertise: {
      title: "Credentials & Expertise:",
      list: [
        "Board-certified with over 10 years of experience",
        "Specialized training in cosmetic dentistry and smile design",
        "Member of [Relevant Dental Associations]",
        "Any other significant achievements or certifications",
      ],
    },
  },
  transformingSmiles: {
    title: "Transforming Smiles One Patient at a Time",
    before: {
      description: "Before",
      image: beforeImage,
    },
    after: {
      description: "After",
      image: afterImage,
    },
  },
  services: {
    title: "Services & Philosophy",
    description:
      "Dr. Diamse is rooted in the philosophy of total dental wellness. She doesn’t just treat teeth; she focuses on the overall health and well-being of every patient. Dr. Diamse’s preventative and restorative services are tailored to address individual needs, ensuring that each smile is a reflection of both beauty and health.",
    button: {
      title: "Book a Consult",
      url: "#contact",
    },
    list: [
      {
        description: "3-on-6 full Mouth Dental Implants",
        image: servicePlaceholder,
      },
      {
        description: "Full Service and Comprehensive Dental Care",
        image: servicePlaceholder,
      },
      {
        description: "Smile Makeover & Cosmetics",
        image: servicePlaceholder,
      },
      {
        description: "Advanced Dental Implants",
        image: servicePlaceholder,
      },
      {
        description: "Oral Surgery",
        image: servicePlaceholder,
      },
      {
        description: "Crowns and Root Canals",
        image: servicePlaceholder,
      },
    ],
  },
  testimonials: {
    reviewerName: "Jen O.",
    review:
      "Dr Diamse is probably the best dentist I have seen in years. She cares and I trust her! At first I was reluctant to be seen by anyone else but I am glad I saw Dr. Diamse she is a very skilled dentist.  I left the dentist office HAPPY!  She helped me with so much more than I anticipated a dentist ever would.  I am so happy, I never want to see another dentist but her. I'll say it again, she cares.  She seems to be better skilled to do my top implants than other dentists.",
    reviewerProfile: reviewer,
    reviewLink: "https://maps.app.goo.gl/pAF3ec262ezWocZj7",
  },
  contact: {
    title: "Visit The Clinic",
    description:
      "Some Text here about the clinic. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    address: "718 Coliseum Way, Midvale, UT 84047",
    phone: "+1 (801) 590 - 8694",
    image: clinicPic,
  },
  footer: {
    social: {
      title: "Social",
      list: [
        {
          title: "Instagram",
          url: "#",
        },
      ],
    },
    about: {
      title: "SLC Dental",
      list: [
        {
          title: "About",
          url: "#",
        },
        {
          title: "Blog",
          url: "/blog",
        },
        {
          title: "Contact",
          url: "#contact",
        },
      ],
    },
    documentation: {
      title: "Documentation",
      list: [
        {
          title: "Detailed Services",
          url: "/docs",
        },
        {
          title: "Case Studies",
          url: "/docs",
        },
        {
          title: "Patient Education",
          url: "/docs",
        },
        {
          title: "Status",
          url: "/docs",
        },
      ],
    },
    newsLetter: {
      message:
        "You'll receive occasional emails from Highnote. You always have the choice to unsubscribe within every email.",
    },
    copyRight: `© ${year} SaltLakeCity.dental`,
    copyRightDescription:
      "SaltLakeCity.dental is the top provider in comprehensive full-service oral health care and dental wellness.",
  },
};
