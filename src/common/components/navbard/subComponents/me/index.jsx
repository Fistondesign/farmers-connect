import style from "./me.module.css";
import avatar from "../../../../../assets/images/avatar.jpg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUserOut } from "../../../../state/actions";
const Me = () => {
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();
    const selector = useSelector((state) => state.signin);
    const dispatch = useDispatch();
    const signOut = () => {
        dispatch(signUserOut());
    };
    return (
        <section className={style.container}>
            <div className={style.me} onClick={() => setToggle(!toggle)}>
                <div
                    className={style.imgHolder}
                    style={{ backgroundImage: `url(${avatar})` }}
                />
                <small>Me</small>
            </div>
            {toggle && (
                <div className="shadow" onClick={() => setToggle(false)}></div>
            )}
            {toggle && (
                <div className={style.dropCard}>
                    <div
                        className={style.profile}
                        onClick={() => navigate("/profile")}
                    >
                        <div className={style.avatarAndNames}>
                            <img src={avatar} alt="profile" />
                            <section>
                                <p>Ntaganda Fiston</p>
                                <small>Farmer musanze district</small>
                            </section>
                        </div>
                        <button type="button">View Profile</button>
                    </div>
                    <div className={style.info}>
                        <p>Account</p>
                        <Link to="/preferences" className={style.link}>
                            Settings & Privacy
                        </Link>
                        <Link to="/preferences" className={style.link}>
                            Help
                        </Link>
                        <Link to="/preferences" className={style.link}>
                            Language
                        </Link>
                    </div>
                    <div className={style.info}>
                        <p>Manage</p>
                        <Link to="#" className={style.link}>
                            Products
                        </Link>
                        <Link to="#" className={style.link}>
                            Add Post
                        </Link>
                        <Link to="#" className={style.link}>
                            Network
                        </Link>
                    </div>
                    <div className={style.footer}>
                        <span className={style.link} onClick={() => signOut()}>
                            Sign out
                        </span>
                    </div>
                </div>
            )}
        </section>
    );
};
export default Me;
