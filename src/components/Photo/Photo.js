import { useState } from "react";
import PropTypes from "prop-types";

import useInput from "../../hooks/useInput"

import {
    updatePhotos
} from "../../containers/App/actions";

import styles from "./Photo.module.scss";

const COMMENT_INPUT_CONFIG =  {
    type: "text",
    initialValue: "",
    className: "comment",
    label: "Comment",
    placeholder: "Type your commment here..."
};

function Photo({
    photos,
    dispatch,
    id,
    category,
    comments,
    likes,
    url
}) {
    const [ comment, Comment, updateComment ] = useInput({
        ...COMMENT_INPUT_CONFIG,
        id
    });

    const [ likeStatus, toggleLikeStatus ] = useState(false);

    const getFilteredData = () => {
        const updatedPhoto = photos.find((photo) => photo.id === id);
        const filteredPhotos = photos.filter((photo) => photo.id !== id);
        return [updatedPhoto, filteredPhotos];
    }

    const handleLikeClick = () => {
        const [ updatedPhoto, filteredPhotos ] = getFilteredData();
        updatedPhoto.likes = likeStatus ? updatedPhoto.likes - 1 : updatedPhoto.likes + 1 ;
        toggleLikeStatus(!likeStatus);
        dispatch(updatePhotos([...filteredPhotos, updatedPhoto]));
    };

    const postComment = () => {
        if (!comment) return;
        const [ updatedPhoto, filteredPhotos ] = getFilteredData();
        updatedPhoto.comments = updatedPhoto.comments.concat(comment);
        dispatch(updatePhotos([...filteredPhotos, updatedPhoto]));
        updateComment("");
    };

    return (
        <div className={`${styles.photo} photo`}>
            <div className={styles.imgContainer}>
                <img src={url} />
            </div>
            <div className={styles.likeBox}>
                <div>
                    <span className={styles.likeCount}>{likes}</span>
                    <span className={styles.likes} onClick={handleLikeClick}>{!likeStatus ? `${likes > 1 ? "Likes" : "Like"}` : `Unlike`}</span>
                </div>
                <span className={styles.category}>{category}</span>
            </div>
            <div className={styles.postCommentBox}>
                {Comment}
                <button onClick={postComment}>Post</button>
            </div>
            <div className={styles.displayCommentBox}>
                {
                    comments.map((comment, i) => <p key={`${i}-${id}`}>{comment}</p>)
                }
            </div>
        </div>  
    );
}

Photo.propTypes = {
    photos: PropTypes.array,
    dispatch: PropTypes.func,
    id: PropTypes.number,
    category: PropTypes.string,
    comments: PropTypes.array,
    likes: PropTypes.number,
    url: PropTypes.string
};

export default Photo;