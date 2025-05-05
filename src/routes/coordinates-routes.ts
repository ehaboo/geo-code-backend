import express, { NextFunction, Request, Response } from "express";
import coordinatesServices from "../services/coordinates-services";

const router = express.Router();

router.get(
  "/",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { address } = request.query;
      if (!address) response.status(400).json({ error: "Missing address." });
      const coordinates = await coordinatesServices.getCoordinates(
        address.toString()
      );
      response.json(coordinates);
    } catch (error: any) {
      next(error);
    }
  }
);

export default router;
