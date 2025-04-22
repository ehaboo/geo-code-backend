import express from "express"; 
import appConfig from "./utils/config";
import fileLogger from "./middleware/file-logger";
import catchAll from "./middleware/catch-all";
import routeNotFound from "./middleware/route-not-found";
import coordinatesRouter from "./routes/coordinates-routes";
import popularSearchRouter from "./routes/popular-search-routes";
import popularSearchListRouter from "./routes/popular-search-list-routes";



const server = express();
server.use(fileLogger); 

server.use("/api/coordinates", coordinatesRouter)
server.use("/api/popular-search",popularSearchRouter)
server.use("/api/popular-search-list",popularSearchListRouter)






server.use(routeNotFound);
server.use(catchAll);
server.listen(appConfig.port, () => console.log(`Listening on ${appConfig.serverUrl}`))
