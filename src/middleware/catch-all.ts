import { NextFunction, Request, Response } from "express";
import appConfig from "../utils/config";
import logger from "../utils/logger";

function catchAll( err:any, request: Request, response: Response, next: NextFunction ){ 
    const status = err.status || 500;  
    logger.errorsLogger( err.message, err );
    response.status(status).send(err.message);
}

export default catchAll;