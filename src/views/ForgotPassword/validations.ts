import { string, object } from 'yup';

const schema = object().shape({
  email: string().email().required('The field email is required'),
});

export default schema;
