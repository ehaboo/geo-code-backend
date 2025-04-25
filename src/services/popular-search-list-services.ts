import { QueryResult } from "pg";
import CoordinatesModel from "../Models/coordinates-model";
import dal from "../utils/dal";





async function getPopularSearchList():Promise<CoordinatesModel[]> {
    const sql  = `SELECT * FROM public.locations ORDER BY hits DESC LIMIT 5;`
    const result:QueryResult = await dal.execute(sql); 
    console.log(result.rows);
    if (!result.rows.length) {
        console.log("No data found.");
        return null;
    }    
    const popularSearchList: CoordinatesModel[] = result.rows; 
    

    return popularSearchList; 
}


export default {
    getPopularSearchList
}