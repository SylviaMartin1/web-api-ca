import asyncHandler from 'express-async-handler';
import { getMovies } from '../tmdb-api'; 
import { getUpcomingMovies } from '../tmdb-api'; 
import { getTrendingMoviesThisWeek } from '../tmdb-api'; 
import { getTopRatedMovies } from '../tmdb-api'; 
import { getMoviesPlayingInTheatres } from '../tmdb-api'; 
import { getActors } from '../tmdb-api';
import { getGenres } from '../tmdb-api';
import { getMovie } from '../tmdb-api';
import { getMovieImages } from '../tmdb-api';
import { getMovieReviews } from '../tmdb-api';
import { getMovieRecommendations } from '../tmdb-api';
import { getMovieCredits } from '../tmdb-api';
import { getMovieStreamingProviders } from '../tmdb-api';
import { getSimilarMovies } from '../tmdb-api';

import express from 'express';

const router = express.Router();

router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));

router.get('/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/trending', asyncHandler(async (req, res) => {
    const trendingMoviesThisWeek = await getTrendingMoviesThisWeek();
    res.status(200).json(trendingMoviesThisWeek);
}));

router.get('/topRated', asyncHandler(async (req, res) => {
    const topRatedMovies = await getTopRatedMovies();
    res.status(200).json(topRatedMovies);
}));

router.get('/inTheatres', asyncHandler(async (req, res) => {
    const moviesPlayingInTheatres = await getMoviesPlayingInTheatres();
    res.status(200).json(moviesPlayingInTheatres);
}));

router.get('/actors', asyncHandler(async (req, res) => {
    const actors = await getActors();
    res.status(200).json(actors);
}));

router.get('/genres', asyncHandler(async (req, res) => {
    const genres  = await getGenres();
    res.status(200).json(genres);
}));

router.get('/movie/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movie  = await getMovie(id);
    res.status(200).json(movie);
}));

router.get('/movie/:id/images', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movieImages  = await getMovieImages(id);
    res.status(200).json(movieImages);
}));

router.get('/movie/:id/reviews', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movieReviews  = await getMovieReviews(id);
    res.status(200).json(movieReviews);
}));

router.get('/movie/:id/recommendations', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movieRecommendations  = await getMovieRecommendations(id);
    res.status(200).json(movieRecommendations);
}));

router.get('/movie/:id/credits', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movieCredits  = await getMovieCredits(id);
    res.status(200).json(movieCredits);
}));

router.get('/movie/:id/streamingProviders', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const streamingProviders  = await getMovieStreamingProviders(id);
    res.status(200).json(streamingProviders);
}));

router.get('/movie/:id/similarMovies', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const similarMovies  = await getSimilarMovies(id);
    res.status(200).json(similarMovies);
}));





export default router;
