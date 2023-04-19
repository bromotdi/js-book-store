import React, { useCallback, useState } from 'react';

export default function PriceCalc({
  price, totalPrice, setUserCount, setTotalPrice,
}) {
  const multiplyPrice = useCallback((value) => +(value * price).toFixed(2), [price]);
  const [errorMessage, setErrorMessage] = useState('');

  const countChange = useCallback(({ target }) => {
    const value = +target.value;
    const count = 42;

    if (value <= count && value > 0) {
      setTotalPrice(multiplyPrice(value));
      setUserCount(value);
      setErrorMessage('');
    } else {
      // eslint-disable-next-line no-param-reassign
      target.value = '';
      setTotalPrice(multiplyPrice(target.value));
      setErrorMessage('Please enter a valid value between 1 and 42');
    }
  }, [multiplyPrice, setUserCount, setTotalPrice]);

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
              max="42"
              onChange={countChange}
            />
          </div>
        </div>
      </div>
      {errorMessage && (
        <div className="row">
          <div className="col">
            <p style={{ color: 'red' }}>{errorMessage}</p>
          </div>
        </div>
      )}
      <div className="row font-weight-bold">
        <div className="col">
          <p>Total Price, $</p>
        </div>
        <div className="col-md-4 col-xl-3 col-5 text-right">
          <p data-testid="total-price">{setUserCount === 0 ? 0 : totalPrice}</p>
        </div>
      </div>
    </div>
  );
}
