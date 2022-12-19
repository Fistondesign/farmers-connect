import style from "./auth.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaLock } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Input from "../../common/components/inputs/input";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { loginSchema } from "./validation";
import { SignupWithEmailAndPassword } from "../../common/state/actions";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../common/components/spinner";
const Signup = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.signup);
    const handleSubmit = (values) => {
        dispatch(SignupWithEmailAndPassword(values));
    };
    const initialValues = {
        email: "",
        password: "",
    };
    return (
        <div className={`container-fluid ${style.container}`}>
            <div className={`row ${style.containerRow}`}>
                <section className={`col-lg-6 col-md-12 ${style.leftPanel}`}>
                    {/* left */}
                </section>
                <section className={`col-lg-6 col-md-12 ${style.rightPanel}`}>
                    <section className={`${style.formContainer}`}>
                        <div className={`${style.formHeader}`}>
                            <h2>Signup to Farmers Connect</h2>
                            <small>
                                Make the most of your professional life.
                            </small>
                        </div>
                        <div className={`${style.socialLoginContainer}`}>
                            <section className={`${style.socialLoginCard}`}>
                                <FcGoogle size={20} />
                                <span>Signup with Google</span>
                            </section>
                            <section className={`${style.socialLoginCard}`}>
                                <FaFacebook size={20} />
                                <span>Signup with Facebook</span>
                            </section>
                        </div>
                        <section className={`${style.orDevider}`}>or</section>
                        <Formik
                            onSubmit={handleSubmit}
                            initialValues={initialValues}
                            validationSchema={loginSchema}
                        >
                            <div className={`${style.formWrapper}`}>
                                <Form className={style.form}>
                                    <Input
                                        type="email"
                                        name="email"
                                        icon={<MdOutlineEmail />}
                                        placeholder="enter e-mail"
                                    />
                                    <Input
                                        type="password"
                                        name="password"
                                        icon={<FaLock />}
                                        placeholder="enter password"
                                    />
                                    <div className="justify-content-end">
                                        <Link to="#" className="text-black">
                                            Forgot Password
                                        </Link>
                                    </div>
                                    <button
                                        type="submit"
                                        className={`${style.button}`}
                                    >
                                        {selector.loading ? (
                                            <Spinner
                                                width="25px"
                                                height="25px"
                                            />
                                        ) : (
                                            "Signup"
                                        )}
                                    </button>
                                    <div className={style.formFooter}>
                                        <span>Already on Farmers Connect?</span>
                                        &nbsp;
                                        <Link to="/" className="text-black">
                                            Sign In
                                        </Link>
                                    </div>
                                </Form>
                            </div>
                        </Formik>
                    </section>
                </section>
            </div>
        </div>
    );
};
export default Signup;
