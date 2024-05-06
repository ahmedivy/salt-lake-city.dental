export type LandingPage = {
  title: string;
  navItems: {
    title: string;
    url: string;
  }[];
  navButton: {
    title: string;
    url: string;
  };
  hero: {
    title: string;
    subtitle: string;
    button: {
      title: string;
      url: string;
    };
  };
  meetTheDoctor: {
    title: string;
    doctorName: string;
    doctorDescription: string;
    doctorProfile: ImageMetadata;
    expertise: {
      title: string;
      list: string[];
    };
  };
  transformingSmiles: {
    title: string;
    before: {
      description: string;
      image: ImageMetadata;
    };
    after: {
      description: string;
      image: ImageMetadata;
    };
  };
  services: {
    title: string;
    description: string;
    button: {
      title: string;
      url: string;
    };
    list: {
      description: string;
      image: ImageMetadata;
    }[];
  };
  testimonials: {
    reviewerName: string;
    review: string;
    reviewerProfile: ImageMetadata;
    reviewLink: string;
  };
  contact: {
    title: string;
    description: string;
    address: string;
    phone: string;
    image: ImageMetadata;
  };
  footer: {
    social: {
      title: string;
      list: {
        title: string;
        url: string;
      }[];
    };
    about: {
      title: string;
      list: {
        title: string;
        url: string;
      }[];
    },
    documentation: {
      title: string;
      list: {
        title: string;
        url: string;
      }[];
    },
    newsLetter: {
      message: string;
    },
    copyRight: string;
    copyRightDescription: string;
  };
};
