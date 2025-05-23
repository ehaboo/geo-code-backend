import { NextFunction, Request, Response } from "express";
import { RouteNotFoundError } from "../Models/client-errors";

function routeNotFound(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const err = new RouteNotFoundError(request.originalUrl);
  next(err);
}

export default routeNotFound;
