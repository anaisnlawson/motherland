import React, { useEffect } from "react";
import { Formik, Form, useField, useFormikContext } from "formik";
import ReactDOM from "react-dom";
import * as Yup from "yup";
import styled from "@emotion/styled";
import './services.css'
import "./services-custom.css";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyTextArea = ({label, ...props}) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
      <>
          <label htmlFor={props.id || props.name}>{label}</label>
          <textarea className="text-area" {...field} {...props} />
          {meta.touched && meta.error ? (
              <div className="error">{meta.error}</div>
          ) : null}
      </>
  );
};

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const Services = () => {
  return (
    <>
    <div className="move">
      <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            description: "" // description
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            lastName: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email addresss`")
              .required("Required"),
            description: Yup.string()
              .max(200, "Must be 200 characters or less")
              .required("Required")
          })}
          onSubmit={async (values, { setSubmitting }) => {
            await new Promise(r => setTimeout(r, 500));
            setSubmitting(false);
          }}
        >
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Jane"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Doe"
            />
            <MyTextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="jane@formik.com"
            />
            <MyTextArea
              label="Event Description"
              name="description"
              rows="6"
              placeholder="Once upon a time there was a princess who lived at the top of a glass hill."
            />
            <div>
              <button type="submit">Submit</button>
            </div>
            
          </Form>
        </Formik>
      </div>
    </>
  )
}

export default Services