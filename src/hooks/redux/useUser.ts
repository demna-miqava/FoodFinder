import {useAppDispatch, useAppSelector, logoutUser} from '@app/redux';
import {useCallback} from 'react';

export const useUser = () => {
  const user = useAppSelector(state => state.user.userInfo);
  const dispatch = useAppDispatch();

  const logout = useCallback(() => {
    dispatch(logoutUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    user,
    logout,
  };
};
