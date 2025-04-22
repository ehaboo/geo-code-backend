import CoordinatesModel from "../Models/coordinates-model";


async function getCoordinates(address:string): Promise<CoordinatesModel>{
    let coordinates:CoordinatesModel; 
    // check if you have it in your db (sql query)
    // yes ? send it to the front - add hits+1 
    // no? axios to google api - save it to db - add hits+1 - send it to the front
    
    console.log("getCoordinates service :) ");
    
    return coordinates; 
}







export default {
    getCoordinates
}