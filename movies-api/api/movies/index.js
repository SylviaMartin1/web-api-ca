import asyncHandler from 'express-async-handler';
import { getMovies } from '../tmdb-api'; 
import { getUpcomingMovies } from '../tmdb-api'; 
import { getTrendingMoviesThisWeek } from '../tmdb-api'; 
import { getTopRatedMovies } from '../tmdb-api'; 
import { getMoviesPlayingInTheatres } from '../tmdb-api'; 
import { getActors } from '../tmdb-api';
import { getGenres } from '../tmdb-api';
import { getMovie } from '../tmdb-api';

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










export default router;
