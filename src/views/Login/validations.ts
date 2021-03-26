import { string, object } from 'yup';

const schema = object().shape({
  email: string().email().required('The field email is required'),
  password: string().min(6).required('The field password is required'),
});

export default schema;
