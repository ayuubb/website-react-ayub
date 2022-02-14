import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <img
        className="mask"
        src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1c8fe0c9197d66232511525bfd1cc82&auto=format&fit=crop&w=1100&q=80"
        alt="pic"
      />
      <h1>{props.judul}</h1>
      <p>{props.artikel}</p>
      <div className="button">Read More</div>
    </div>
  );
};

Card.defaultProps = {
  judul: 'judul',
  artikel: 'ini artikel',
};

export default Card;
