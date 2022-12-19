import PropTypes from "prop-types";
import style from "./card.module.css";
const Card = ({ width, height,styles, ...props }) => {
    return (
        <div
            className={`${style.card} ${styles}`}
            style={{ width: width, minHeight: height }}
        >
            {props.children}
        </div>
    );
};
Card.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
};
export default Card;
