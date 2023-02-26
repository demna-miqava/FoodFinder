import {
  useAppDispatch,
  useAppSelector,
  logoutUser,
  authenticate,
} from '@app/redux';
import {User} from '@app/types';
import {useCallback} from 'react';

export const useUser = () => {
  const user = useAppSelector(state => state.user.userInfo);
  const dispatch = useAppDispatch();

  const logout = useCallback(() => {
    dispatch(logoutUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const authenticateUser = useCallback((userInfo: User) => {
    dispatch(authenticate(userInfo));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    user,
    logout,
    authenticateUser,
  };
};
