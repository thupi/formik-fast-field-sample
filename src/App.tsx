import React from "react";
import { Formik, Form, Field, ErrorMessage, FastField } from "formik";
const validateValues = (values: any) => {
  const errors: any = {};
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.comment) {
    errors.comment = "Comment is required";
  }
  return errors;
};

const App: React.FC = () => {
  return (
    <Formik<any>
      initialValues={{ email: "sad", comment: "" }}
      validate={validateValues /* more about this function later */}
      onSubmit={values => alert(`Submitting: ${JSON.stringify(values)}`)}
      render={({ isValid }) => (
        <Form>
          <FastField name="email" type="text" placeholder="Email">
            {(props: any) => (
              <input {...props.field} placeholder={console.log("email")} />
            )}
          </FastField>
          <ErrorMessage name="email" component="div" className="error" />

          <FastField name="comment">
            {(props: any) => (
              <input {...props.field} placeholder={console.log("comment")} />
            )}
          </FastField>
          <ErrorMessage name="comment" component="div" className="error" />

          <button disabled={!isValid} type="submit">
            Submit
          </button>
        </Form>
      )}
    />
  );
};

export default App;
