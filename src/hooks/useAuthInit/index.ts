import { authorized, logOut } from '@/redux/authorization/actions';
import oAuthOptions from '@/services/setup';
import { User } from '@/types/user';
import oAuth from '@DevimaSolutions/o-auth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const useAuthInit = (): boolean => {
  const [isInitialized, setInitialized] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    oAuth(oAuthOptions);

    const unsubscribe = oAuth().oncePendingActionComplete(() => {
      setInitialized(true);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = oAuth().onAuthStateChanged(async (authCallback) => {
      const user = await authCallback.getUser<User>();

      if (!user) {
        dispatch(logOut());
        return;
      }

      dispatch(authorized(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return isInitialized;
};

export default useAuthInit;
