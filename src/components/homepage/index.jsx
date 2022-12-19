import ContentWrapper from "../../common/components/contentWrapper";
import Navbar from "../../common/components/navbard/navbar";
import Card from "../../common/components/card";
import Post from "./subComponent/post";
import avatar from "../../assets/images/avatar.jpg";
import farmers from "../../assets/images/farmers.jpg";
import style from "./homepage.module.css";
import Messaging from "../messaging";
const HomePage = () => {
    return (
        <>
            <Navbar />
            <ContentWrapper>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Card
                                width="100%"
                                height="400px"
                                styles={style.card}
                            >
                                left info
                            </Card>
                        </div>
                        <div className="col-lg-6">
                            <Card width="100%" height="600px">
                                <Post image={avatar}></Post>
                            </Card>
                            <Card width="100%" height="600px">
                                <Post image={farmers}></Post>
                            </Card>
                        </div>
                        <div className="col-lg-3">
                            <Card
                                width="100%"
                                height="300px"
                                styles={style.card}
                            >
                                right info
                            </Card>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
            <Messaging />
        </>
    );
};

export default HomePage;
