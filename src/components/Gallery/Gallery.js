import { useContext } from "react";

import Provider from "../../utils/Provider";
import { Photo } from "../";

import styles from "./Gallery.module.scss";

function Gallery() {
    const { dispatch, store } = useContext(Provider);
    const photos = store.filteredPhotos;
    
    return (
        <section className={styles.gallery}>
           {
               photos.length ? photos.map((photo, i) => <Photo 
                    key={photo.id}
                    dispatch={dispatch}
                    photos={photos}
                    {...photo}
                /> ) : (
                    <div>
                        {store.loading ? "Loading photos..." : "Sorry, no results found matching your search criteria."}
                    </div>
                )
           }
        </section>
    );
}

export default Gallery;