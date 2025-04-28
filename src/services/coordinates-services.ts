import DataModel from "../Models/data-model";
import appConfig from "../utils/config";
import axios from "axios";
import dal from "../utils/dal";
import CoordinatesModel from "../Models/coordinates-model";
import { QueryResult } from "pg";

async function getCoordinates(address: string): Promise<CoordinatesModel| null> {
    
    const result = await getDataFromDatabase(address); 
    
    if (result) {
        try {
            await updateHits(address);
            result.hits++
            return result;  
        } catch (error:any) {
            console.log(error.message);
            
        }
    }

    try {
        const res = await axios.get<DataModel>(`${appConfig.googleApiUrl}?address=${address}&key=${appConfig.googleApiKey}`);
        const results = res.data.results;

        if (!results.length) {
            console.log("No coordinates found.");
            return null;
        }

        const location = results[0].geometry.location;
        await addAddressCoordinates(address, location);

        const result = await getDataFromDatabase(address); 
        
        return result;
    } catch (error:any) {
        console.log(error.message);
        return null;
    }
}

async function getDataFromDatabase(address:string):Promise<CoordinatesModel>{
    const sql = `SELECT * FROM public.locations WHERE address = $1`;
    const resultObj:QueryResult  = await dal.execute(sql, [address]);
    const result = resultObj.rows[0];
    return result;
}


async function addAddressCoordinates(address: string, coordinate: { lat: number, lng: number }): Promise<void> {
    const sql = `INSERT INTO public.locations VALUES (DEFAULT, $1, $2, $3, 1)`; 
     await dal.execute(sql, [address, coordinate.lat, coordinate.lng]);
    
    
}


async function updateHits(address: string): Promise<void> {
    const sql = `UPDATE public.locations SET hits = hits + 1 WHERE address = $1`;
    await dal.execute(sql, [address]);

}

export default {
    getCoordinates
};
