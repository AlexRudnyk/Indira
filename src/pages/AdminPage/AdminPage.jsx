import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
// import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addGoods } from 'redux/goods/operations';
import { AdminPageSection } from './AdminPage.styled';
import { AdminGoodItem } from 'components/AdminGoodItem';
import { useGoods } from 'hooks';

// const schema = yup.object().shape({
//   title: yup
//     .string()
//     .min(2)
//     .max(30, 'must be less than 30 characters')
//     .required(),
//   text: yup.string().min(5, 'must be at least 5 characters').required(),
//   photoURL: yup.string().required(),
//   price: yup.number().required(),
// });

export const AdminPage = () => {
  const dispatch = useDispatch();
  const { goods } = useGoods();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [photo, setPhoto] = useState(null);
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const initialValues = {
    title: '',
    text: '',
    description: '',
    photoURL: null,
    price: '',
  };

  const formData = new FormData();
  formData.append('title', title);
  formData.append('text', text);
  formData.append('description', description);
  formData.append('photoURL', photo);
  formData.append('price', price);

  const handleSubmit = (values, actions) => {
    dispatch(addGoods(formData));
    setTitle('');
    setText('');
    setDescription('');
    setPhoto(null);
    setPrice('');
  };

  return (
    <AdminPageSection>
      <Formik
        // validationSchema={schema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <Field
              value={title}
              type="text"
              name="title"
              placeholder="Enter Titile"
              onChange={e => setTitle(e.target.value)}
            />
            <ErrorMessage name="title" />

            <Field
              value={text}
              type="text"
              name="text"
              placeholder="Enter Text"
              onChange={e => setText(e.target.value)}
            />
            <ErrorMessage name="text" />

            <textarea
              value={description}
              type="text"
              name="description"
              placeholder="Enter description"
              onChange={e => setDescription(e.target.value)}
            />
            <ErrorMessage name="text" />

            <input
              type="file"
              name="photoURL"
              onChange={e => {
                setFieldValue('photoURL', e.target.files[0]);
                setPhoto(e.target.files[0]);
              }}
              accept="image/*,.png,.jpg,.gif,.web"
            />
            <ErrorMessage name="photoURL" />

            <Field
              value={price}
              type="number"
              name="price"
              placeholder="Enter Price"
              onChange={e => setPrice(e.target.value)}
            />
            <ErrorMessage name="price" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      <ul>
        {goods.map(good => (
          <li key={good._id}>
            <AdminGoodItem good={good} />
          </li>
        ))}
      </ul>
    </AdminPageSection>
  );
};
