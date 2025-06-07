import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

const globalError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.code == "P2003") {
    res.status(err.statusCode || httpStatus.BAD_REQUEST).json({
      success: false,
      message: "foregin key does not match",
      error: err.meta,
    });
  }
  if (err.name == "PrismaClientValidationError") {
    res.status(err.statusCode || httpStatus.BAD_REQUEST).json({
      success: false,
      message: "feilds is missing check the schema and uploaded value ",
      error: err.message,
    });
  }
  res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err.message || "something went wrong",
    error: err,
  });
};

export default globalError;
