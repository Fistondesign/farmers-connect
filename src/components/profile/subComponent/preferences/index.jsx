import { Link } from "react-router-dom";
import Card from "../../../../common/components/card";
import ContentWrapper from "../../../../common/components/contentWrapper";
import Navbar from "../../../../common/components/navbard/navbar";
import Accordion from "../accordion";
import ChangeLanguageForm from "./subComponent/changeLanguageForm";
import ChangeModeForm from "./subComponent/changeModeForm";
import style from "./accountPreference.module.css";
const AccountPreference = () => {
    return (
        <>
            <Navbar />
            <ContentWrapper>
                <div className="container-fluid">
                    <div className="row">
                        <div className={`col-lg-2 ${style.sidebar}`}>
                            <Card
                                width="200px"
                                height="400px"
                                styles={style.card}
                            >
                                <section className={style.header}>
                                    <p>Account preferences</p>
                                </section>
                                <section className={style.menus}>
                                    <Link to="#" className={style.link}>
                                        Profile Information
                                    </Link>
                                    <Link to="#" className={style.link}>
                                        Language
                                    </Link>
                                    <Link to="#" className={style.link}>
                                        Display
                                    </Link>
                                    <Link to="#" className={style.link}>
                                        Syncing options
                                    </Link>
                                    <Link to="#publish" className={style.link}>
                                        Subscriptions & payments
                                    </Link>
                                    <Link to="#" className={style.link}>
                                        Account management
                                    </Link>
                                </section>

                                <section className={style.header}>
                                    <p>Sign in & security</p>
                                </section>
                                <section className={style.menus}>
                                    <Link to="#" className={style.link}>
                                        Account access
                                    </Link>
                                    <Link to="#" className={style.link}>
                                        Advertising preferences
                                    </Link>
                                </section>
                            </Card>
                        </div>
                        <div className="col-lg-8">
                            <Card
                                width="100%"
                                height="auto"
                                styles={style.card}
                            >
                                <Accordion
                                    accordion={false}
                                    title="Profile Information"
                                    subTitle="Name, location, and industry"
                                />
                                <Accordion
                                    accordion={true}
                                    title="Display"
                                    subTitle="Control how Farmers Connect works
                                    when using this device"
                                >
                                    <p>
                                        Choose to use your device settings or
                                        select between dark and light mode
                                    </p>
                                    <ChangeModeForm />
                                </Accordion>
                                <Accordion
                                    accordion={true}
                                    title="Language"
                                    subTitle="Control how Farmers Connect works
                                    when using this device"
                                >
                                    <p>
                                        Select the language you use on Farmers
                                        Connect
                                    </p>
                                    <div className={style.content}>
                                        <p>
                                            Let us know which language you want
                                            to use on Farmers Connect. You can
                                            change it back at any time.{" "}
                                            <Link to="#">Learn more</Link>
                                        </p>
                                        <ChangeLanguageForm />
                                    </div>
                                </Accordion>
                                <Accordion
                                    accordion={true}
                                    title="Showing profile photos"
                                    subTitle="Choose to show or hide profile photos of other members"
                                >
                                    <p>
                                        Select the language you use on Farmers
                                        Connect
                                    </p>
                                    <div className={style.content}>
                                        <p>
                                            Which FarmersConnect members'
                                            profile photos would you like to
                                            see?
                                        </p>
                                        <select>
                                            <option>All</option>
                                            <option>None</option>
                                        </select>
                                    </div>
                                </Accordion>
                                <Accordion
                                    accordion={false}
                                    title="Subscriptions & payments"
                                    subTitle="Reactivate to unlock the power of FarmersConnect"
                                />
                                <Accordion
                                    id="#publish"
                                    accordion={false}
                                    title="View purchase history"
                                    subTitle="See your previous purchases and transactions on FarmersConnect"
                                />
                            </Card>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </>
    );
};
export default AccountPreference;
