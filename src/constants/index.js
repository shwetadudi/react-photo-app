export const PHOTO_API_URL = "https://raw.githubusercontent.com/Lokenath/MyRepo/master/Test/package.json";
export const INITIAL_STATE = {
    photos: [],
    filteredPhotos: [],
    filters: {
        sortByMostLiked: false,
        sortByMostCommented: false,
        categoryToFilterBy: ""
    },
    error: "",
    loading: false
};