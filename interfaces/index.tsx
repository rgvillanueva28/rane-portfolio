import { IconType } from "react-icons";

export interface portfolioTechInterface {
  data: Array<{
    id: number;
    attributes: {
      name: string;
      slug: string;
    };
  }>;
}

export interface portfolioItemInterface {
  attributes: {
    title: string;
    slug: string;
    description: string;
    github?: string;
    link?: string;
    portfolio_techs: portfolioTechInterface;
  };
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
