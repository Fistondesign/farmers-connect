import { Formik, Form } from "formik";
import { InputSelector } from "../../../../../common/components/inputs/input";
import Button from "../../../../../common/components/button/button";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../../../../../common/state/actions";
const ChangeLanguageForm = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <Formik
                onSubmit={(values) => {
                    dispatch(changeLanguage(values.language));
                }}
                initialValues={{ language: "" }}
                className="container"
            >
                <Form className="row">
                    <div className="col-lg-5 mt-10">
                        <InputSelector name="language" as="select">
                            <option value="en-us">English</option>
                            <option value="rw">Kinyarwanda</option>
                            <option value="fr">Frensh</option>
                        </InputSelector>
                    </div>
                    <div className="col-lg-12">
                        <Button type="submit">Save</Button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};
export default ChangeLanguageForm;
