import { Formik, Form } from "formik";
import { InputRadio } from "../../../../../common/components/inputs/input";
import Button from "../../../../../common/components/button/button";
import { useDispatch } from "react-redux";
import { changeMode } from "../../../../../common/state/actions";
const ChangeModeForm = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <Formik
                onSubmit={(values) => {
                    dispatch(changeMode(values));
                }}
                initialValues={{ mode: "" }}
                className="container"
            >
                <Form className="row">
                    <div className="col-lg-12">
                        <InputRadio
                            name="mode"
                            value="dark"
                            type="radio"
                            label="Dark Mode"
                        />
                    </div>
                    <div className="col-lg-12">
                        <InputRadio
                            name="mode"
                            value="light"
                            label="Light Mode"
                        />
                    </div>
                    <Button type="submit">Save</Button>
                </Form>
            </Formik>
        </div>
    );
};
export default ChangeModeForm;
