import appConfig from "./config";
import pg, { QueryResult } from "pg"; 

const db = new pg.Client({
    user: appConfig.pgUser, 
    host: appConfig.pgHost, 
    database: appConfig.pgDataBase, 
    password: appConfig.pgPassword, 
    port: appConfig.pgPort
});


db.connect(); 

function execute(sql: string, values?: any[]): Promise<QueryResult> {
    return new Promise((resolve, reject) => {        
        db.query(sql, values, (err:any, result:any) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        })
    });
}


export default {execute}