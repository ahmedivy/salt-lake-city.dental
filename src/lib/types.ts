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
    reviewerProfile: string;
    reviewLink: string;
  };
};
