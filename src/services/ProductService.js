import { axiosPrivate } from "../axios/SetupAxios";
import { dummyData } from "../dummyData/data";

export const TRENDING_FOOD_URL = `/trending-food`;

export function getTrendingFood() {
  return axiosPrivate.get(TRENDING_FOOD_URL).catch(() => dummyData);
}
