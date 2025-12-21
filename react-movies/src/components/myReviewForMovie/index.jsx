import React, { useEffect, useState } from "react";
import MyReviewCard from "../myReviewCard";
import { getMovieReviews } from "../../api/reviews-api";

const MyReviewForMovie = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    getMovieReviews(movieId)
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, [movieId]);

  if (reviews.length === 0) {
    return <p style={{ color: "white" }}>No reviews yet.</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        overflowX: "auto",
        paddingBottom: "1rem"
      }}
    >
      {reviews.map((review) => (
        <MyReviewCard
          key={review._id}
          author={review.author}
          rating={review.rating}
          content={review.content}
        />
      ))}
    </div>
  );
};

export default MyReviewForMovie;
