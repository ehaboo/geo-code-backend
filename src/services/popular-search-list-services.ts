import CoordinatesModel from "../Models/coordinates-model";
import prisma from "../utils/prisma";

async function getPopularSearchList(): Promise<CoordinatesModel[] | null> {
  const topFive = await prisma.locations.findMany({
    orderBy: {
      hits: "desc",
    },
    take: 5,
  });

  if (!topFive.length) {
    console.log("No data found.");
    return null;
  }

  return topFive;
}

export default {
  getPopularSearchList,
};
