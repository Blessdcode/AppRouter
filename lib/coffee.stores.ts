import { MapboxType } from "@/types";

const transformCoffeeData = (result: MapboxType) => {
    return {
        id: result.id,
        address: result.properties?.address || "",
        name:result.text
    }
}

export const fetchCoffeeStores = async (longLat: string, limit: number) => {
  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/coffee.json?limit=${limit}&proximity=${longLat}&access_token=${process.env.MAPBOX_API}`
    );
    const data = await response.json();
    const photos = await getListOfCoffeeStorePhotos();

    return data.features.map((result: MapboxType, idx: number) =>
      transformCoffeeData(idx, result, photos)
    );
  } catch (error) {
    console.error("Error while fetching coffee stores", error);
  }
};