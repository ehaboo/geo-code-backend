import DataModel from "../Models/data-model";
import appConfig from "../utils/config";
import axios from "axios";
import CoordinatesModel from "../Models/coordinates-model";
import { ResorceNotFound } from "../Models/client-errors";
import prisma from "../utils/prisma";

async function getCoordinates(address: string): Promise<CoordinatesModel> {
  const isExist = await getDataFromDatabase(address);

  if (!isExist) return await getDataFromGoogleApi(address);
  else return await updateHits(address);
}

async function getDataFromGoogleApi(
  address: string
): Promise<CoordinatesModel> {
  const { results } = await fetchData(address);
  const location = results[0].geometry.location;
  const addedCoordinates = await addAddressCoordinates(address, location);
  return addedCoordinates;
}

async function fetchData(address: string): Promise<DataModel> {
  try {
    const response = await axios.get<DataModel>(
      `${appConfig.googleApiUrl}?address=${address}&key=${appConfig.googleApiKey}`
    );
    const results = response.data.results;
    if (!results.length) throw new ResorceNotFound(address);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getDataFromDatabase(address: string): Promise<CoordinatesModel> {
  const coordinates = await prisma.locations.findUnique({
    where: {
      address: address,
    },
  });
  return coordinates;
}

async function addAddressCoordinates(
  address: string,
  coordinate: { lat: number; lng: number }
): Promise<CoordinatesModel> {
  const addedCoordinates = await prisma.locations.create({
    data: {
      address: address,
      lat: coordinate.lat,
      lng: coordinate.lng,
      hits: 1,
    },
  });
  return addedCoordinates;
}

async function updateHits(address: string): Promise<CoordinatesModel> {
  const updatedCoordinates = await prisma.locations.update({
    where: {
      address: address,
    },
    data: {
      hits: {
        increment: 1,
      },
    },
  });
  return updatedCoordinates;
}

export default {
  getCoordinates,
};
