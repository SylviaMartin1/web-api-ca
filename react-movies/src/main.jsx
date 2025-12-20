// 1. Import Statements
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";
import StartPage from "./pages/startPage";
import ProfilePage from "./pages/profilePage";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import UpcomingMoviesPage from './pages/upcomingMoviesPage';
import TrendingMoviesPage from './pages/trendingMoviesPage';
import TopRatedMoviesPage from './pages/topRatedMoviesPage';
import MoviesPlayingInTheatresPage from './pages/moviesPlayingInTheatresPage';
import MyReviewsPage from "./pages/myReviewsPage";
import MustWatchPage from './pages/mustWatchPage';
import theme from './theme'
import { ThemeProvider } from '@mui/material/styles';
import AuthContextProvider from "./contexts/authContext";
import ProtectedRoutes from "./protectedRoutes";
import './index.css';

// 2. Main Functionality
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path="/" element={< StartPage />} />
            <Route path="/login" element={< LoginPage />} />
            <Route path="/signup" element={< SignupPage />} />
            <Route element={<ProtectedRoutes />}>
            <Route path="/profile" element={< ProfilePage />} />
             <Route path="/myReviews" element={<MyReviewsPage />} />
            <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
            <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
            <Route path="/movies/trending" element={<TrendingMoviesPage />} />
            <Route path="/movies/topRated" element={<TopRatedMoviesPage />} />
            <Route path="/movies/nowPlayingInTheatres" element={<MoviesPlayingInTheatresPage />} />
            <Route path="/movies/mustWatch" element={<MustWatchPage />} />
            <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
            <Route path="/movies/home" element={<HomePage />} />
            </Route>
            
            <Route path="*" element={ <Navigate to="/" /> } />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </AuthContextProvider>
    </ThemeProvider>
  );
};
const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);
