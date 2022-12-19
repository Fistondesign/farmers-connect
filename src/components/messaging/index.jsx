import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import avatar from "../../assets/images/avatar.jpg";
import style from "./messaging.module.css";
const Messaging = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className={`${style.container} ${toggle && style.show}`}>
            <section className={style.header}>
                <section className={style.avatarAndLabel}>
                    <div
                        className={style.avatar}
                        style={{ backgroundImage: `url(${avatar})` }}
                    />
                    <small>Messaging</small>
                </section>
                <section className={style.actions}>
                    <BsThreeDots className={style.toggleIcon} />
                    <BiEdit className={style.toggleIcon} />
                    <AiFillCaretDown
                        className={style.toggleIcon}
                        onClick={() => setToggle(!toggle)}
                    />
                </section>
            </section>
        </div>
    );
};
export default Messaging;
