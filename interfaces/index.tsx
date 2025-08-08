import { IconType } from "react-icons";

export interface portfolioTechInterface {
  id: number;
  name: string;
  slug: string;
}

export interface portfolioItemInterface {
  title: string;
  slug: string;
  description: string;
  content: string;
  github?: string;
  link?: string;
  portfolio_techs: portfolioTechInterface[];
  variants?: any;
}

export interface HomeInterface {
  name: string;
  description: string;
  greeting: string;
  title: string;
}

export interface NavigationLinks {
  name: string;
  link: string;
  icon: IconType;
}

export interface aboutInterface {
  alt: string;
  slug: string;
  icon: string;
  content: string;
  library: "fa" | "md";
}
