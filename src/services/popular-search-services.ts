import CoordinatesModel from "../Models/coordinates-model";
import prisma from "../utils/prisma";

async function getPopularSearch(): Promise<CoordinatesModel | null> {
  const popularSearch = await prisma.locations.findFirst({
    orderBy: {
      hits: "desc",
    },
  });

  if (!popularSearch) {
    console.log("No data found.");
    return null;
  }

  return popularSearch;
}

export default {
  getPopularSearch,
};
