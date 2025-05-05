import { QueryResult } from "pg";
import CoordinatesModel from "../Models/coordinates-model";
import dal from "../utils/dal";

async function getPopularSearch(): Promise<CoordinatesModel> {
  const sql = `SELECT * FROM public.locations ORDER BY hits DESC LIMIT 1;`;
  const result: QueryResult = await dal.execute(sql);
  if (!result.rows.length) {
    console.log("No data found.");
    return;
  }

  const popularSearch: CoordinatesModel = result.rows[0];

  return popularSearch;
}

export default {
  getPopularSearch,
};
