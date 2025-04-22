import express, { NextFunction, Request, Response } from "express"; 
import popularSearchListServices from "../services/popular-search-list-services";




const router = express.Router(); 

router.get("/", async (request:Request, response:Response, next:NextFunction) => {
    try {
        const popularSearchList = await popularSearchListServices.getPopularSearchList(); 
        response.json(popularSearchList); 
    } catch (error:any) {
        next(error)
    }
})


export default router; 