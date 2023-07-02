
import { IUser } from "./user.interface";
import { User } from "./user.model";

const getAllUser = async (): Promise<IUser[] | null> => {
  const result = await User.find();
  return result;
};


export const UserService = {
  getAllUser,
};
