export const getUserReviews = async () => {
  const response = await fetch(`http://localhost:8080/api/reviews/`, {
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
  });
  return response.json();
};

export const addReview = async (review) => {
  const res = await fetch(`http://localhost:8080/api/reviews/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: window.localStorage.getItem("token"),
    },
    body: JSON.stringify(review),
  });
  return res.json();
};

export const updateReview = async (id, review) => {
  const res = await fetch(`http://localhost:8080/api/reviews/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: window.localStorage.getItem("token"),
    },
    body: JSON.stringify(review),
  });
  return res.json();
};

export const deleteReview = async (id) => {
  const res = await fetch(`http://localhost:8080/api/reviews/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
  });
  return res;
};

export const getMovieReviews = async (movieId) => {
  const response = await fetch(
    `http://localhost:8080/api/reviews/movie/${movieId}`,
    {
      headers: {
        Authorization: window.localStorage.getItem("token"),
      },
    }
  );
  return response.json();
};