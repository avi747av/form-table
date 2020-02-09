import React from "react";
import "./styles.css";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
const ErrorMessage = styled.h6`
  color: red;
  padding: 0;
  margin: 0;
`;

const Input = styled.input`
  border: ${props => `2px solid ${props.error ? "red" : "initial"}`};
`;

const MyForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  ...props
}) => {
  return (
    <>
      {/* <Field name="input1" component={Input} placeholder="search" /> */}
      <Input
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.input1}
        error={errors.input1 && touched.input1}
        type="text"
        name="input1"
        placeholder="search"
      />
      <br />
      {errors.input1 && <ErrorMessage>{errors.input1}</ErrorMessage>}

      <Field name="input2" as="input" placeholder="search" />
      <br />
      {errors.input2 && <ErrorMessage>{errors.input2}</ErrorMessage>}

      <Field name="input3" as="input" placeholder="search" />
      <br />
      {errors.input3 && <ErrorMessage>{errors.input3}</ErrorMessage>}

      <Field name="input4" as="input" placeholder="search" />
      <br />
      {errors.input4 && <ErrorMessage>{errors.input4}</ErrorMessage>}
    </>
  );
};

const FormikApp = withFormik({
  mapPropsToValues({ input1, input2, input3, input4 }) {
    return {
      input1: input1 || "",
      input2: input2 || "",
      input3: input3 || "",
      input4: input4 || ""
    };
  },
  validate: values => {
    const errors = {};
    console.log("from validating function ", values);
    Object.keys(values).forEach(field => {
      if (values[field] === "") {
        errors[field] = `you have to fill ${field} field`;
      }
    });
    // if (values.input1 === "") {
    //   errors.input1 = "you have to fill the field";
    // }
    return errors;
  },
  validateOnBlur: true,
  handleSubmit(values) {
    console.log("values");
    console.log(values);
  }
})(MyForm);

export default FormikApp;
