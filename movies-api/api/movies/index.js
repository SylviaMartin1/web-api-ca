import asyncHandler from 'express-async-handler';
import { getMovies } from '../tmdb-api'; 
import { getUpcomingMovies } from '../tmdb-api'; 
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






export default router;
