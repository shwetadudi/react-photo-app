import { useState, useContext } from "react";

import Provider from "../../utils/Provider";
import useInput from "../../hooks/useInput"

import {
    filterByCategory,
    sortByMostLiked,
    sortByMostCommented
} from "../../containers/App/actions";

import styles from "./Filters.module.scss";

const FILTER_INPUT_CONFIG =  {
    type: "text",
    initialValue: "",
    id: "filter",
    className: "filter",
    label: "Search images",
    placeholder: "Search category"
};

function Filters() {
    const { dispatch, store } = useContext(Provider);
    let filters = store.filters;
    const [ filter, Filter ] = useInput({
        ...FILTER_INPUT_CONFIG,
        cb: () => {
            dispatch(filterByCategory({...filters, category: filter}));
        }
    });

    return (
        <section className={styles.filters}>
            <div className={styles.link}>
                <span id="mostLiked" style={{
                    fontWeight: filters.sortByMostLiked ? "bold" : "normal"
                }} 
                onClick={() => dispatch(sortByMostLiked(filters))}>
                    Most liked
                </span>
            </div>
            <div className={styles.link}>
                <span id="mostCommented" style={{
                    fontWeight: filters.sortByMostCommented ? "bold" : "normal"
                }} 
                onClick={() => dispatch(sortByMostCommented(filters))}>
                    Most commented
                </span>
            </div>
            <div id="category" className={styles.input}>
                {Filter}
            </div>
        </section>
    );
}

export default Filters;