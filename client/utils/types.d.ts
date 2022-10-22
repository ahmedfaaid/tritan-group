export type Job = {
  id: number;
  attributes: {
    title: string;
    location: string;
    summary: string;
    duties: string;
    qualifications: string;
    benefits: string;
    date: Date;
    industry: string;
    contact_name: string;
    contact_email: string;
    contact_phone: string;
  };
};

export type Team = {
  id: number;
  attributes: {
    name: string;
    title: string;
    image: {
      data: {
        id: number;
        attributes: any;
      };
    };
    phone: string;
    email: string;
    bio: string;
  };
};
