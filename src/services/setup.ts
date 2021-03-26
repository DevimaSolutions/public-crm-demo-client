import { IAuthOptions } from '@DevimaSolutions/o-auth';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const oAuthOptions: IAuthOptions = {
  axiosInstance,
  signIn: async (email: string, password: string) =>
    axiosInstance.post('/auth/login', {
      email,
      password,
    }),
  signOut: async () => Promise.resolve(),
  refreshToken: async (refresh_token: string) =>
    axiosInstance.post('/auth/token', {
      refresh_token,
    }),
  getUser: async (authToken: string) =>
    axiosInstance.get('/auth/user', {
      headers: {
        authorization: authToken,
      },
    }),
};

export default oAuthOptions;
