import PopularSearchModel from "../Models/popular-search-model";





async function getPopularSearchList():Promise<PopularSearchModel[]> {
    let popularSearchList: PopularSearchModel[]; 
    // check in db the first 5 most popular search (sql query)
    // return it 
    console.log("popular-search-list service :)");

    return popularSearchList; 
}


export default {
    getPopularSearchList
}