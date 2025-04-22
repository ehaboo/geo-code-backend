import env from "dotenv"; 
env.config()



class Config { 
    public port = +process.env.SERVER_PORT;
    public serverUrl = "http://localhost:" + this.port;

    public pgHost = process.env.PG_HOST;
    public pgDataBase = process.env.PG_DATABASE;
    public pgUser = process.env.PG_USER;
    public pgPassword = process.env.PG_PASSWORD;
    public pgPort = +process.env.PG_PORT;

}




const appConfig = new Config(); 
export default appConfig;