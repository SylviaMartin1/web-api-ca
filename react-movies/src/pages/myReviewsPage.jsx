import React, { useEffect, useState } from "react";
import { getUserReviews, deleteReview } from "../api/reviews-api";

const MyReviewsPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getUserReviews()
      .then((data) => setReviews(data))
      .catch((err) => console.error("Failed to fetch reviews:", err));
  }, []);

  const handleDelete = async (id) => {
    await deleteReview(id);
    setReviews(reviews.filter((r) => r._id !== id));
  };

  return (
    <div style={{ color: "white", padding: "1rem" }}>
      <h2>My Reviews</h2>
      {reviews.length === 0 && <p>No reviews yet.</p>}
      {reviews.map((review) => (
        <div
          key={review._id}
          style={{
            border: "1px solid gray",
            padding: "1rem",
            marginBottom: "1rem",
            borderRadius: "5px",
          }}
        >
          <p>
            <strong>Movie ID:</strong> {review.movieId}
          </p>
          <p>
            <strong>Author:</strong> {review.author}
          </p>
          <p>
            <strong>Rating:</strong> {review.rating} / 5
          </p>
          <p>{review.content}</p>
          <button onClick={() => handleDelete(review._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default MyReviewsPage;

