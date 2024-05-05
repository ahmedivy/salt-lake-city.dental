import afterImage from "../images/after-pic.png";
import beforeImage from "../images/before-pic.png";
import doctorProfile from "../images/doctor-profile.png";
import servicePlaceholder from "../images/services-placeholder.jpg";

import type { LandingPage } from "../lib/types";

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
};
