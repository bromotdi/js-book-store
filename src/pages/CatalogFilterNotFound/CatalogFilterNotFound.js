import React from 'react';
import IconMessage from '../../components/IconMessage';
import Wrapp from '../../components/Wrapp';
import searchNotFound from '../../img/searchNotFound.svg';

export default function CatalogFilterNotFound() {
  return (
    <Wrapp>
      <IconMessage
        icon={searchNotFound}
        message="No books found..."
      />
    </Wrapp>
  );
}
