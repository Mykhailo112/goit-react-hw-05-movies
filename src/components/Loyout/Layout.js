import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { NavList, NavItem, Header, Link } from './Loyout.styled';

export const Layout = () => {
  return (
    <div>
      <Header>
        <nav>
          <NavList>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/movies">Movies</Link>
            </NavItem>
          </NavList>
        </nav>
      </Header>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};
