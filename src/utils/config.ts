import env from "dotenv";
env.config();

class Config {
  public port = +process.env.SERVER_PORT || 8001;
  public pgHost = process.env.PG_HOST || "localhost";
  public pgDataBase = process.env.PG_DATABASE || "geocode";
  public pgUser = process.env.PG_USER;
  public pgPassword = process.env.PG_PASSWORD;
  public pgPort = 5432; // you can delete it after prisma
  public databaseUrl = `postgresql://${this.pgUser}:${this.pgPassword}@${this.pgHost}:5432/${this.pgDataBase}?schema=public`;
  public googleApiUrl = "https://maps.googleapis.com/maps/api/geocode/json";
  public googleApiKey = process.env.GOOGLE_API_KEY;
  public serverUrl = `http://${this.pgHost}:${this.port}`;
}

const appConfig = new Config();
export default appConfig;
