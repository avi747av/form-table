import React from "react";
import App from "./App";
import * as Yup from "yup";
import { withFormik, Form, Field } from "formik";

const ControlledForm = ({ values, errors, touched, ...props }) => {
  return (
    <Form>
      <Field name="MyInput" component={App} />
      <button type="submit">submit </button>
    </Form>
  );
};

const FormikForm = withFormik({
  mapPropsToValues({ MyInput }) {
    return {
      MyInput: MyInput || ""
    };
  },
  validationSchema: Yup.object().shape({
    MyInput: Yup.object().required(" you have to fill the input")
  }),
  validateOnBlur: true,
  handleSubmit(values, { setSubmitting }, ...props) {
    console.log({ ...props });
    console.log("set ", setSubmitting);
    console.log("submitting");
    console.log(values);
  }
})(ControlledForm);

export default FormikForm;
