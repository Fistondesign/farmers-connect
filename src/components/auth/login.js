import { useDispatch, useSelector } from "react-redux";
import style from "./auth.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaLock } from "react-icons/fa";
import { MdOutlineEmail } from 'react-icons/md';
import Input from "../../common/components/inputs/input";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { loginSchema } from './validation';
import { SigninWithEmailAndPassword } from "../../common/state/actions";
import Spinner from "../../common/components/spinner";
const Login = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.signin);
    const handleSubmit = (values) => {
        //  dispatch(SigninWithEmailAndPassword(values))
        console.log(values);
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
                            <h2>Login to Farmers Connect</h2>
                            <small>
                                Welcome back! login with your data that you
                                entered during registration.
                            </small>
                        </div>
                        <div className={`${style.socialLoginContainer}`}>
                            <section className={`${style.socialLoginCard}`}>
                                <FcGoogle size={20} />
                                <span>Login with Google</span>
                            </section>
                            <section className={`${style.socialLoginCard}`}>
                                <FaFacebook size={20} />
                                <span>Login with Facebook</span>
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
                                            " Sign In"
                                        )}

                                    </button>
                                    <div className={style.formFooter}>
                                        <span>Don't have an account?</span>
                                        &nbsp;
                                        <Link to="/signup" className="text-black">
                                            Signup
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
export default Login;
