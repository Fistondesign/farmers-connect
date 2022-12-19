import { useState } from "react";
import { FormattedMessage } from "react-intl";
import style from "./accordion.module.css";
const Accordion = ({
    title,
    subTitle,
    accordion = false,
    handleClick = () => {},
    ...props
}) => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className={`container-fluid`}>
            <div className={`row ${style.container}`}>
                <div className={`col-lg-10 ${style.left}`}>
                    <header>
                        <p>{title}</p>
                        <small>{subTitle}</small>
                    </header>
                </div>
                <div className={`col-lg-2 ${style.right}`}>
                    <span
                        onClick={
                            accordion === true
                                ? () => setToggle(!toggle)
                                : handleClick
                        }
                    >
                        {toggle ? (
                            "Close"
                        ) : (
                            <FormattedMessage id="change_key" />
                        )}
                    </span>
                </div>
                <div
                    className={`col-lg-11 ${style.accordionContent} ${
                        toggle && style.accordionShow
                    }`}
                >
                    {props.children}
                </div>
            </div>
        </div>
    );
};
export default Accordion;
