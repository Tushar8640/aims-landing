import { Request, Response } from "express";
import { UserService } from "./user.service";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { IUser } from "./user.interface";
import httpStatus from "http-status";

const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAllUser();
  sendResponse<IUser[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User retrieved successfully !",
    data: result,
  });
});

export const UserController = {
  getAllUser,
};
