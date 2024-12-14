import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import style from './RegistrationForm.module.css';
import { useId } from 'react';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        console.log('Success');
      })
      .catch(e => {
        console.log(e.message);
      });
    resetForm();
  };

  const emailFieldId = useId();
  const passwordFieldId = useId();
  const nameFieldId = useId();

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={style.form}>
          <h2 className={style.title}> Register</h2>
          <div className={style.boxInput}>
            <label className={style.label} htmlFor={nameFieldId}>
              Name
            </label>
            <Field
              className={style.input}
              type="text"
              name="name"
              id={nameFieldId}
              placeholder="Alex"
            />
            <ErrorMessage name="name" component="div" className={style.error} />
          </div>

          <div className={style.boxInput}>
            <label className={style.label} htmlFor={emailFieldId}>
              Email
            </label>
            <Field
              className={style.input}
              type="email"
              name="email"
              id={emailFieldId}
              placeholder="alex2939@mail.com"
            />
            <ErrorMessage
              name="email"
              component="div"
              className={style.error}
            />
          </div>

          <div className={style.boxInput}>
            <label className={style.label} htmlFor={passwordFieldId}>
              Password
            </label>
            <Field
              className={style.input}
              type="password"
              name="password"
              id={passwordFieldId}
              placeholder="Enter your password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className={style.error}
            />
          </div>

          <button
            type="submit"
            className={style.button}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing up...' : 'Sign Up'}
          </button>
        </Form>
      )}
    </Formik>
  );
}
