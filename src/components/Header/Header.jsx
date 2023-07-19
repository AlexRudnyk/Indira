import { Link } from 'react-router-dom';
import { UserNav } from 'components/UserNav';
import { AuthNav } from 'components/AuthNav';
import { useAuth } from 'hooks';
import { Container, HeaderWrapper, NavWrapper } from './Header.styled';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <HeaderWrapper>
        <Link to="/">Logo</Link>
        <NavWrapper>{isLoggedIn ? <UserNav /> : <AuthNav />}</NavWrapper>
      </HeaderWrapper>
    </Container>
  );
};
