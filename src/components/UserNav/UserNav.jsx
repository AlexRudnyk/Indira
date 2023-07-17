import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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
      {user.role === 'admin' && <Link to="/admin">Admin</Link>}
      <button type="button" onClick={handleLogoutClick}>
        Logout
      </button>
    </>
  );
};
