import style from './contentWrapper.module.css';
const ContentWrapper = (props) => {
    return (
        <div className={style.contentWrapper}>{props.children}</div>
    );
}
export default ContentWrapper;