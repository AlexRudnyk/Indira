import { UserNav } from 'components/UserNav';
import { AuthNav } from 'components/AuthNav';
import { useAuth } from 'hooks';
import {
  HeaderSection,
  Container,
  HeaderWrapper,
  NavWrapper,
  Logo,
} from './Header.styled';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderSection>
      <Container>
        <HeaderWrapper>
          <Logo to="/">Indira</Logo>
          <NavWrapper>{isLoggedIn ? <UserNav /> : <AuthNav />}</NavWrapper>
        </HeaderWrapper>
      </Container>
    </HeaderSection>
  );
};
