import style from "./post.module.css";
import { BsThreeDots, BsShareFill } from "react-icons/bs";
import { FaGlobeEurope, FaCommentDots } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { RiSendPlaneFill } from "react-icons/ri";
import { IconTextButton } from "../../../../common/components/button/button";
const Post = ({ image }) => {
    return (
        <div className={style.container}>
            <div className={style.panelHeaderI}>
                <section className={style.AvatarWithNames}>
                    <div
                        className={style.avatar}
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>
                    <small>James Kamanzi liked your image</small>
                </section>
                <BsThreeDots className={style.action} />
            </div>
            <div className={style.panelHeaderII}>
                <section
                    className={style.avatar}
                    style={{ backgroundImage: `url(${image})` }}
                ></section>
                <section className={style.panelHeaderIITexts}>
                    <p>Tim Kanik</p>
                    <small>Bio Info/title</small>
                    <small>
                        1w <FaGlobeEurope size={12} />
                    </small>
                </section>
            </div>
            <div className={style.panelBody}>
                {/* when type of post body is image */}
                <section
                    style={{ backgroundImage: `url(${image})` }}
                    className={style.image}
                ></section>
            </div>
            <div className={style.footerI}>
                <section className={style.likes}>
                    <BiLike className={style.blike} />
                    <FcLike className={style.hlike} />
                    <small>18</small>
                </section>
                <small className={style.share}>18 Share</small>
            </div>
            <div className={style.footerII}>
                <IconTextButton type="button" label="Like" icon={<BiLike />} />
                <IconTextButton
                    type="button"
                    label="Comment"
                    icon={<FaCommentDots />}
                />
                <IconTextButton
                    type="button"
                    label="Share"
                    icon={<BsShareFill />}
                />
                <IconTextButton
                    type="button"
                    label="Send"
                    icon={<RiSendPlaneFill />}
                />
            </div>
        </div>
    );
};
export default Post;
