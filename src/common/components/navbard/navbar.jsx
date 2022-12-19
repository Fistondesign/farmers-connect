import style from "./navbar.module.css";
import MenuItem from "./subComponents/menuItem";
import NavSearch from "./subComponents/search";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import {
    MdOutlineProductionQuantityLimits,
    MdCircleNotifications,
} from "react-icons/md";
import Me from "./subComponents/me";
import Work from "./subComponents/work";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className={`container-fluid ${style.navbar}`}>
            <section className={style.logo}>
                <p>FConnect</p>
            </section>
            <NavSearch />
            <div className={style.navSpace}></div>
            <MenuItem
                icon={<AiOutlineHome />}
                name="home"
                onClick={() => navigate("/homepage")}
            />
            <MenuItem icon={<IoIosPeople />} name="my network">
                <span className="menu-badgePlus">40</span>
            </MenuItem>
            <MenuItem
                icon={<MdOutlineProductionQuantityLimits />}
                name="market"
            />
            <MenuItem icon={<AiOutlineMessage />} name="messaging" />
            <MenuItem icon={<MdCircleNotifications />} name="notifications">
                <span className="menu-badge">4</span>
            </MenuItem>
            <Me />
            <span className={style.vDevider}></span>
            <Work />
        </div>
    );
};
export default Navbar;
