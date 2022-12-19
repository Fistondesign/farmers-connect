import { useState } from "react";
import { SiPolywork } from "react-icons/si";
import style from "./work.module.css";
const Work = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className={style.work} onClick={() => setToggle(!toggle)}>
                <span>
                    <SiPolywork />
                </span>
                <small>Work</small>
            </div>
            {toggle && (
                <div className="shadow" onClick={() => setToggle(false)}></div>
            )}
            <div className={`${style.sidebar} ${toggle && style.show}`}>
                sidebar
            </div>
        </>
    );
};
export default Work;
