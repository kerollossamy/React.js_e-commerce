import React from "react";

const StarsMeter = ({ vote }) => {
  const maxStars = 5;
  const rating = Math.round(vote);

  const starIcons = Array.from({ length: maxStars }, (_, index) => (
    <i key={index} className={`fas fa-star${index < rating && ""}`}></i>
  ));

  return <>{starIcons}</>;
};

export default StarsMeter;
