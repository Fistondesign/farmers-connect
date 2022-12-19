import style from "./menuItem.module.css";

const MenuItem = ({ icon, name,onClick,...props}) => {
    return (
        <div className={style.menuItem} onClick={onClick}>
            <span className={style.text}>{icon}</span>
            <small>{name}</small>
            {props.children}
        </div>
    );
};
export default MenuItem;
