import style from "./button.module.css";

export const IconButton = ({ icon }) => {
    return <div className={style.iconButton}>{icon}</div>;
};
export const IconTextButton = ({ icon, label, ...props }) => {
    return (
        <button className={style.iconTextButton} {...props}>
            <span className={style.icon}>{icon}</span>
            <span className={style.text}>{label}</span>
        </button>
    );
};

const Button = ({ type, ...props }) => {
    return (
        <button className={`${style.button}`} type={type}>
            {props.children}
        </button>
    );
};

export default Button;
