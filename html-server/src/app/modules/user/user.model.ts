import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";
import { userRole } from "./user.constant";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
      required: true,
    },
    facebook: {
      type: String,
      required: true,
    },
    instagram: {
      type: String,
      required: true,
    },
    youtube: {
      type: String,
      required: true,
    },
    details: {
      category: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

export const User = model<IUser>("user", userSchema);
