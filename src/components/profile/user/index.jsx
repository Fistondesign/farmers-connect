import Card from "../../../common/components/card";
import ContentWrapper from "../../../common/components/contentWrapper";
import Navbar from "../../../common/components/navbard/navbar";
import image from "../../../assets/images/avatar.jpg";
import style from "./profile.module.css";
import { IconButton } from "../../../common/components/button/button";
import { AiFillEdit } from "react-icons/ai";
const Profile = () => {
    return (
        <>
            <Navbar />
            <ContentWrapper>
                <div className={`container-fluid ${style.container}`}>
                    <div className="row">
                        <div
                            className={`col-lg-8 col-md-12 ${style.profileContainer}`}
                        >
                            <Card
                                width="93%"
                                height="370px"
                                style={{ padding: "0px" }}
                            >
                                <div
                                    className={style.coverImage}
                                    style={{ backgroundImage: `url(${image})` }}
                                >
                                    <IconButton icon={<AiFillEdit />} />
                                </div>
                                <section
                                    className={style.profileImage}
                                    style={{ backgroundImage: `url(${image})` }}
                                />
                                <div className="row">
                                    <div className="col-lg-9 col-md-12">
                                        <section className={style.info}>
                                            <p>Ntaganda Fiston</p>
                                            <small>
                                                Farmer in musanze district
                                            </small>
                                        </section>
                                    </div>
                                    <div className="col-lg-3 col-md-12">
                                        <section className={style.info}>
                                            <small>Male</small>
                                            <small>
                                                North,Musanze District
                                            </small>
                                        </section>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div
                            className={`col-lg-4 col-md-12 ${style.sideContainer}`}
                        >
                            <Card width="90%" height="100px">
                                card profile
                            </Card>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </>
    );
};
export default Profile;
