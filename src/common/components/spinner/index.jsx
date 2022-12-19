import React from "react";
import style from "./spinner.module.css";
const Spinner = ({ width, height }) => {
    return (
        <div
            className={style.spinner}
            style={{ width: width, height: height }}
        ></div>
    );
};
export default Spinner;
