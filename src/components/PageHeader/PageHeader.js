import PropTypes from "prop-types";
import styles from "./PageHeader.module.scss";

function PageHeader({
    text = "Imaginary"
}) {
    return (
        <header className={styles.pageHeader}>
            <h1>{ text }</h1>
        </header>
    );
}

PageHeader.propTypes = {
    text: PropTypes.string
}

export default PageHeader;