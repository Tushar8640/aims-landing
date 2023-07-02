export type IUserRole = "seller" | "buyer";

export type IUser = {
  category: string;
  location: string;
  id: number;
  name: string;
  image: string;
  skills: string[];
  facebook: string;
  instagram: string;
  youtube: string;
  details: {
    category: string;
    location: string;
  };
};
