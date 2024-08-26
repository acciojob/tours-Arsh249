import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <article>
      <img src={image} alt={name} />
      <footer>
        <div>
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p id={`tour-item-para-rec6d6T3q5EBIdCfD`}>
          {showMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Show less' : 'Show more'}
          </button>
        </p>
        <button id={`delete-btn-rec6d6T3q5EBIdCfD`} onClick={() => removeTour(id)}>
          Remove
        </button>
      </footer>
    </article>
  );
};

export default Tour;
