import css from "./contactForm.module.css";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ContactForm({ onSubmit }) {
  const nameId = useId();
  const numberId = useId();

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={onSubmit}
      validationSchema={formSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameId}>Name</label>
        <Field
          className={css.input}
          type="text"
          name="name"
          id={nameId}
        ></Field>
        <ErrorMessage name="name" component="span" />

        <label htmlFor={numberId}>Number</label>
        <Field
          className={css.input}
          type="tel"
          name="number"
          id={numberId}
        ></Field>
        <ErrorMessage name="number" component="span" />

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
