class Result {
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
}

class DataModel {
  public results: Result[];
}

export default DataModel;
