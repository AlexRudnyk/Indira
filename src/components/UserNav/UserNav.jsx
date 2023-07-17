import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';

export const UserNav = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <>
      <p>Hello, {`${user.name}`}</p>
      <button type="button" onClick={handleLogoutClick}>
        Logout
      </button>
    </>
  );
};
