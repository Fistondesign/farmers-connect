import {FaSearch} from 'react-icons/fa';
import style from "./search.module.css";
const NavSearch = () => {
    return <div className={style.search}>
        <FaSearch size={14}/>
        <input type="text" placeholder='Search'/>
    </div>;
};
export default NavSearch;
