import React from "react";

const Camelid = ({ name, image, trivia }) => {
  return (
    <div className="camelid-card">
      <h2>{name}</h2>
      <img src={image} alt={name} width="300" />
      <p>{trivia}</p>
    </div>
  );
};

export default Camelid;
