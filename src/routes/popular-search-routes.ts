import express, { NextFunction, Request, Response } from "express"; 
import popularSearchServices from "../services/popular-search-services";

const router = express.Router(); 



router.get("/", async (request:Request, response:Response,next:NextFunction) => {
    try {
        const popularSearch = await popularSearchServices.getPopularSearch(); 
        response.json(popularSearch)
    } catch (error:any) {
        next(error)
    }
})











export default router;