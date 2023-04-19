import React from 'react';
import Wrapp from '../Wrapp';
import cartIcon from '../../img/shopping-cart.svg';
import IconMessage from '../IconMessage';

export default function CartEmpty() {
  return (
    <Wrapp>
      <IconMessage
        icon={cartIcon}
        message="Cart empty..."
      />
    </Wrapp>
  );
}
