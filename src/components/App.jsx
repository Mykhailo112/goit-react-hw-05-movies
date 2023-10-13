import { Route, Routes } from 'react-router-dom';
import { Layout } from './Loyout/Layout';
import { lazy, Suspense } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Loader } from './Loader/Loader';
import { Container } from './App.styled';
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/MoviesSearch/MoviesSearch'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const MoviesDetails = lazy(() => import('pages/MoviesDetails/MoviesDetails'));
const NotFound = lazy(() => import('./NotFound/NotFound'));

export const App = () => {
  return (
    <Container>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MoviesDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <GlobalStyle />
      </Suspense>
    </Container>
  );
};
