import appConfig from "./config";
import pg, { QueryResult } from "pg"; 


const pool = new pg.Pool({
    user: appConfig.pgUser, 
    host: appConfig.pgHost, 
    database: appConfig.pgDataBase, 
    password: appConfig.pgPassword, 
    port: appConfig.pgPort
}); 

async function execute(sql: string, values?: any[]): Promise<QueryResult> {
    try {
        const result:QueryResult = await pool.query(sql,values); 
        return result;  
    } catch (error:any) {
        console.log(error.message);
        
    }
    }

export default {execute}