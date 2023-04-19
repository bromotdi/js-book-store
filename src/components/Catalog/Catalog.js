import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Wrapp from '../Wrapp/Wrapp';

export default function Catalog({ items }) {
  return (
    <Wrapp>
      {items.map((item) => (
        <div data-testid="Catalog-item" className="col-sm-6 col-md-4 col-lg-3" key={item.id}>
          <ProductCard product={item} />
        </div>
      ))}
    </Wrapp>
  );
}
