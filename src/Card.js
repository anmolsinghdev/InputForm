import React from 'react';
import './Card.scss';
const Card = ({ user }) => {
  return (
    <div className="container">
      <div className="card">
        <span>
          {user.firstname} {user.lastname}
        </span>
        <p>{user.message}</p>
        <span>{user.email}</span>
      </div>
    </div>
  );
};

export default Card;
