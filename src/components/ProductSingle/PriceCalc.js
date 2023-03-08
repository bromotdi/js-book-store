import React, { useCallback } from 'react';

export default function PriceCalc({
  price, totalPrice, count, userCount, setUserCount, setTotalPrice,
}) {
  const multiplyPrice = useCallback((value) => +(value * price).toFixed(2), [price]);

  const countChange = useCallback(({ target }) => {
    const value = +target.value;

    if (value <= count || value > 0) {
      setTotalPrice(multiplyPrice(value));
      setUserCount(value);
    }
  }, [count, multiplyPrice, setUserCount, setTotalPrice]);

  return (
    <div className="card p-4">
      <div className="row">
        <div className="col">
          <p>Price, $</p>
        </div>
        <div className="col-md-4 col-xl-3 col-5 text-right">
          <p>{price}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>Count</p>
        </div>
        <div className="col-md-4 col-xl-3 col-5 text-right">
          <div className="input-group" style={{ marginTop: '-3px' }}>
            <input
              data-testid="price-counter"
              className="form-control form-control-sm"
              type="number"
              min="1"
              max={count}
              value={userCount}
              onChange={countChange}
            />
          </div>
        </div>
      </div>
      <div className="row font-weight-bold">
        <div className="col">
          <p>Total Price, $</p>
        </div>
        <div className="col-md-4 col-xl-3 col-5 text-right">
          <p data-testid="total-price">{totalPrice}</p>
        </div>
      </div>
    </div>
  );
}
