import express from 'express';
import Review from './reviewModel';
import asyncHandler from 'express-async-handler';
import authenticate from '../../authenticate';

const router = express.Router();

router.use(authenticate);


// Get all reviews of a specific user
router.get('/', async (req, res) => {
    console.log(req.user);
    const reviews = await Review.find({ userId: `${req.user._id}`});
    res.status(200).json(reviews);
});

//Get all reviews for a specific movie
router.get('/movie/:movieId', asyncHandler(async (req, res) => {
  const reviews = await Review.find({ movieId: req.params.movieId });
  res.status(200).json(reviews);
}));

// Add a review
router.post('/', asyncHandler(async (req, res) => {
    const newReview = req.body;
    newReview.userId = req.user._id;
    const review = await Review(newReview).save();
    res.status(201).json(review);
}));

// Update a review
router.put('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;
    const result = await Review.updateOne({
        _id: req.params.id,
    }, req.body);
    if (result.matchedCount) {
        res.status(200).json({ code:200, msg: 'Review Updated Successfully' });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find Review' });
    }
});

// Delete a review
router.delete('/:id', async (req, res) => {
    const result = await Review.deleteOne({
        _id: req.params.id,
    });
    if (result.deletedCount) {
        res.status(204).json();
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find Review' });
    }
});


export default router;