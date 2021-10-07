export type Job = {
  id: number;
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

export type Team = {
  id: number;
  name: string;
  title: string;
  image: any;
  phone: string;
  email: string;
  bio: string;
};
