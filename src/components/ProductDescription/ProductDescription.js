import React from 'react';
import './ProductDescription.scss';

export default function ProductDescription({ product }) {
  const {
    title,
    author,
    cover,
    description,
    tags,
  } = product;

  return (
    <div className="card product-desc mb-4">
      <div className="row flex-column-reverse  flex-sm-row">
        <div className="col">
          <img data-testid="prod-cover" src={cover} className="product-desc-img w-100" alt="a" />
          <p data-testid="prod-desc" className="p-4">{description}</p>
        </div>
        <div className="col">
          <div className="pt-4 pr-4 pl-4 pl-sm-0">
            <h3 data-testid="prod-title">{title}</h3>
            <span data-testid="prod-author" className="text-muted h6">{author}</span>
            <p className="tags">
              {tags.map((tag) => <span key={tag} className="badge badge-secondary">{tag}</span>)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
