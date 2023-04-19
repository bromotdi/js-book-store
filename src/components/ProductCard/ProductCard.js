import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

export default function ProductCard({ product }) {
  const {
    id, title, price, cover, author,
  } = product;

  return (
    <div className="card mb-4 product">
      <img className="card-img-top product-img" data-testid="cover" src={cover} alt={title} />
      <div className="card-body">
        <h5 className="card-title" data-testid="title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted" data-testid="author">{author}</h6>
        <div className="row">
          <div className="col-lg-5">
            <span className="price" data-testid="price">{price}</span>
          </div>
          <div className="col-lg-7">
            <Link data-testid="link" to={`/books/${id}`} className="bttn primary">
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
