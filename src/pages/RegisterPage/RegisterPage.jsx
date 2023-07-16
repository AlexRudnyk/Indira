import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { signup, login } from '../../redux/auth/operations';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(16, 'must be less than 16 characters')
    .required(),
  email: yup
    .string()
    .email()
    .matches(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      'available latin-based alphabet, numeric character and _ . + -'
    )
    .min(5, 'must be at least 5 characters')
    .max(63, 'email length must be less than 63 characters')
    .required(),
  phone: yup.string().matches(/^\+380\d{9}$/),
  password: yup
    .string()
    .min(7, 'must be at least 7 characters')
    .max(12, 'password length must be less than 12 characters')
    .matches(/^(?!.*\s)/, ' whitespaces are forbidden.')
    .matches(/^(?=.*[0-9])/, 'must contain at least one numeric character')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])/,
      'must contain at least: one upper case letter, one lower case letter, only latin-based alphabet'
    )
    .required(),
});

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    phone: '',
  };

  const handleSubmit = async (
    { name, email, phone, password },
    { resetForm }
  ) => {
    try {
      const resultSignup = await dispatch(
        signup({ name, email, phone, password })
      );
      // toast.success(`Welcome ${name}!`);

      if (resultSignup.type === 'auth/signup/fulfilled') {
        await dispatch(login({ email, password }));
      }
      if (resultSignup.type === 'auth/signup/rejected') {
        // toast.error(resultSignup.payload.message);
      }
      resetForm();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <Field type="text" name="name" placeholder="John Doe" />
          <ErrorMessage name="name" />

          <Field type="text" name="phone" placeholder="+380671112233" />
          <ErrorMessage name="phone" />

          <Field type="email" name="email" placeholder="example@mail.com" />
          <ErrorMessage name="email" />

          <Field
            type="password"
            name="password"
            placeholder="Please enter your password"
          />
          <ErrorMessage name="password" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
