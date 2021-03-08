import React, { Children, useState } from "react";
import { Formik, useField, Form, Field } from "formik";
import { withStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import useAxios from "axios-hooks";
import {
  TextField,
  Button,
  Checkbox,
  Radio,
  FormControlLabel,
} from "@material-ui/core";
// import { TextareaAutosize } from "@material-ui/core";
import "../styling/buyForm.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short")
    .max(50, "Name is too long")
    .required("Putting a name is required"),
  email: Yup.string()
    .email("Invalid Email")
    .required("Putting and email is required"),
  style: Yup.string().required("A radio option is required"),
});

const MyRadio = ({ label, ...props }) => {
  const [field] = useField(props);
  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

const MyTextArea = ({ ...props }) => {
  const [field] = useField(props);
  return <textarea className="textAreaForm" {...field} />;
};

export default function BuyFormComp() {
  const axios = require("axios");
  return (
    <div className="buy-form-cont">
      <Formik
        initialValues={{
          name: "",
          email: "",
          powerwashed: false,
          style: "",
          summary: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          console.log("submit", values);

          alert(
            "Thank you for the submission. Korionna will be in contact with you shortly"
          );
          await axios
            .post("http://127.0.0.1:8000/contacts/postings/", values)
            .then(async (resp) => {
              await axios
                .post(
                  `http://127.0.0.1:8000/contacts/postings/${resp.data.id}/send_form/`,
                  values
                )
                .then((resp) => {
                  console.log(resp);
                });
            });
          setSubmitting(false);

          resetForm();
        }}
      >
        {({ values, isSubmitting, errors, touched }) => (
          <Form className="form">
            <div className="name-field-cont">
              <Field
                className="name-field"
                placeholder="Name"
                name="name"
                type="input"
              />
              {touched.name && errors.name ? (
                <label
                  style={{
                    color: "#990000",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {errors.name}
                </label>
              ) : null}
              <Field
                className="email-name"
                placeholder="Email"
                name="email"
                type="input"
              />

              {touched.email && errors.email ? (
                <label
                  style={{
                    color: "#990000",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  className="error-label"
                >
                  {errors.email}
                </label>
              ) : null}
            </div>

            <div className="radio-cont">
              {/* <h1 className="choose-one-text"> Choose 1</h1> */}
              <MyRadio
                name="style"
                type="radio"
                value="Glitter"
                label="Glitter"
              />

              <MyRadio
                name="style"
                type="radio"
                value="Wood grain"
                label="Wood grain"
              />
              <MyRadio
                name="style"
                type="radio"
                value="Hydro dipped"
                label="Hydro dipped"
              />
              <MyRadio
                name="style"
                type="radio"
                value="Camouflage"
                label="Camouflage"
              />
              <MyRadio
                name="style"
                type="radio"
                value="Alcohol Ink"
                label="Alcohol Ink"
              />
              <MyRadio
                name="style"
                type="radio"
                value="Marble"
                label="Marble"
              />
              {touched.style && errors.style ? (
                <label
                  style={{
                    color: "#990000",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  className="error-label"
                >
                  {errors.style}
                </label>
              ) : null}
            </div>
            <div>
              <label> Power washed look </label>
              <Field name="powerwashed" type="checkbox" as={Checkbox} />
            </div>

            <div className="info-cont">
              <h1 className="order-from-description-header">
                Description/More details
              </h1>
              <Field
                className="info"
                name="summary"
                type="textarea"
                as={MyTextArea}
              />
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "30px",
                justifyContent: "center",
              }}
            >
              <Button
                style={{
                  color: "white",
                  width: "300px",
                  backgroundColor: "#996666",
                }}
                disabled={isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
