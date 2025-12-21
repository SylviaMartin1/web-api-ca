import React, { useEffect, useState } from "react";
import { getUserReviews, deleteReview } from "../api/reviews-api";
import MyReviewCard from "../components/myReviewCard";

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
      <div
      style={{
        display: "flex",
        gap: "1rem",
        padding: "1rem",
        overflowX: "auto"
      }}
    >
      {reviews.map((review) => (
       <MyReviewCard
          key={review._id}
          author={review.author}
          rating={review.rating}
          content={review.content}
        >
          <button onClick={() => handleDelete(review._id)}>
            Delete
          </button>
        </MyReviewCard>
      ))}
      </div>
    </div>
  );
};

export default MyReviewsPage;

