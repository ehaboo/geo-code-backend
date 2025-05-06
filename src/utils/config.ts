import env from "dotenv";
env.config();

class Config {
  public port = +process.env.SERVER_PORT || 8001;
  public serverUrl = `http://localhost:${this.port}`;
  public googleApiUrl = "https://maps.googleapis.com/maps/api/geocode/json";
  public googleApiKey = process.env.GOOGLE_API_KEY;
}

const appConfig = new Config();
export default appConfig;
