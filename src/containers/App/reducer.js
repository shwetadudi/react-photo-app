import { filterActions } from "./actions";
import { INITIAL_STATE } from "../../constants";

const filterPhotos = (photos, filter) => {
    let filteredPhotos = photos.filter((photo) => filter.category ? photo.category.toLowerCase().includes(filter.category.toLowerCase()) : true);

    if (filter.sortByMostLiked) {
        return filteredPhotos.sort((a, b) => b.likes - a.likes);
    }
    return filteredPhotos.sort((a, b) => b.comments.length - a.comments.length);
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case filterActions.FETCH_PHOTOS:
            return {
                ...state,
                error: false,
                loading: true
            };
        case filterActions.FETCH_PHOTOS_SUCCESS:
            return {
                ...state,
                photos: action.payload,
                filteredPhotos: action.payload,
                error: false,
                loading: false
            };
        case filterActions.FETCH_PHOTOS_ERROR:
            return {
                ...state,
                error: true,
                loading: false
            };
        case filterActions.SORT_BY_MOST_LIKED:
            return {
                ...state,
                filters: action.payload,
                filteredPhotos: filterPhotos(state.photos, action.payload)
            }
        case filterActions.SORT_BY_MOST_COMMENTED:
            return {
                ...state,
                filters: action.payload,
                filteredPhotos: filterPhotos(state.photos, action.payload)
            }
        case filterActions.FILTER_BY_CATEGORY:
                return {
                    ...state,
                    filters: action.payload,
                    filteredPhotos: filterPhotos(state.photos, action.payload)
                }
        case filterActions.UPDATE_PHOTOS:
                return {
                    ...state,
                    photos: action.payload
                };
        default:
            return state;
    }
};