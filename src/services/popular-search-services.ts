import { QueryResult } from "pg";
import CoordinatesModel from "../Models/coordinates-model";
import dal from "../utils/dal";



async function getPopularSearch():Promise<CoordinatesModel| null>{

    const sql  = `SELECT * FROM public.locations ORDER BY hits DESC LIMIT 1;`
    const result:QueryResult = await dal.execute(sql); 
    console.log(result.rows);
    if (!result.rows.length) {
        console.log("No data found.");
        return null;
    }
    
    const popularSearch:CoordinatesModel = result.rows[0]; 
    
    console.log("popular-search service :)");
    return popularSearch; 
}



export default {
    getPopularSearch
}