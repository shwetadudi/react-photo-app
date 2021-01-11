import { useEffect, useReducer } from "react";

import {
  PageHeader,
  Filters,
  Gallery
} from "../../components";

import {
  PHOTO_API_URL,
  INITIAL_STATE
} from "../../constants";

import reducer from "./reducer";

import {
  fetchPhotos,
  fetchPhotosSuccess,
  fetchPhotosError
} from "./actions";

import apiResource from "../../utils/apiHelper";
import Provider from "../../utils/Provider";

function App() {
  const [store, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    // trigger loader
    dispatch(fetchPhotos());

    apiResource(PHOTO_API_URL)
      .then((resp) => {
        dispatch(fetchPhotosSuccess(resp.pics));
      })
      .catch((err) => {
        // log error to service
        dispatch(fetchPhotosError());
      });
  }, []);

  return (
    <div className="App">
      <Provider.Provider value={{
        store,
        dispatch
      }}>
          <PageHeader 
            text="React Photo App"
          />
          <Filters />
          <Gallery />
      </Provider.Provider>
    </div>
  );
}

export default App;