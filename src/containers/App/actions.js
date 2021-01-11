export const filterActions = {
    SORT_BY_MOST_LIKED: "SORT_BY_MOST_LIKED",
    SORT_BY_MOST_COMMENTED: "SORT_BY_MOST_COMMENTED",
    FILTER_BY_CATEGORY: "FILTER_BY_CATEGORY",
    FETCH_PHOTOS: "FETCH_PHOTOS",
    FETCH_PHOTOS_SUCCESS: "FETCH_PHOTOS_SUCCESS",
    FETCH_PHOTOS_ERROR: "FETCH_PHOTOS_ERROR",
    UPDATE_PHOTOS: "UPDATE_PHOTOS"
};

export const sortByMostLiked = (payload) => {
    return {
        type: filterActions.SORT_BY_MOST_LIKED,
        payload: {
            ...payload,
            sortByMostCommented: false,
            sortByMostLiked: true
        }
    };
};

export const sortByMostCommented = (payload) => {
    return {
        type: filterActions.SORT_BY_MOST_COMMENTED,
        payload: {
            ...payload,
            sortByMostCommented: true,
            sortByMostLiked: false
        }
    };
};

export const filterByCategory = (payload) => {
    return {
        type: filterActions.FILTER_BY_CATEGORY,
        payload
    };
};

export const fetchPhotos = () => {
    return {
        type: filterActions.FETCH_PHOTOS 
    };
};

export const fetchPhotosSuccess = (payload) => {
    return {
        type: filterActions.FETCH_PHOTOS_SUCCESS,
        payload
    };
};

export const fetchPhotosError = () => {
    return {
        type: filterActions.FETCH_PHOTOS_ERROR
    };
};

export const updatePhotos = (payload) => {
    return {
        type: filterActions.UPDATE_PHOTOS,
        payload
    };
};