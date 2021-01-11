import { useRef, useEffect, createPortal } from "react";
import styles from "./Modal.module.scss";

const Modal = ({children}) => {
    const elRef = useRef(null);
    if (!elRef.current) {
        const div = document.createElement("div");
        elRef.current = div;
    }

    useEffect(() => {
        const modalRoot = document.getElementById("modalRoot");
        modalRoot.appendChild(elRef.current);

        return () => modalRoot.removeChild(elRef.current);
    });

    return createPortal(<div><div className={styles.wrapper}>{children}</div></div>, elRef.current);
};

export default Modal;