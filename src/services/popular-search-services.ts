import PopularSearchModel from "../Models/popular-search-model";



async function getPopularSearch():Promise<PopularSearchModel>{
    let popularSearch:PopularSearchModel; 
    // check in db the most address hits (sql query)
    // return it 
    console.log("popular-search service :)");

    return popularSearch; 
}



export default {
    getPopularSearch
}