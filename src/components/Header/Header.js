import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cartIcon from '../../img/shopping-cart.svg';
import { signout } from '../../store/actions/userActions';
import Wrapp from '../Wrapp/Wrapp';
import './Header.scss';
import userImg from '../../img/unknown-guy.svg';

export default function Header() {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const signOut = useCallback(() => {
    dispatch(signout());
  }, [dispatch]);

  return (
    <header className="mb-5">
      <div className="bg-dark text-light">
        <Wrapp className="py-2 justify-content-end">
          <div className="col-5 col-xs-8 col-md-2 text-right pr-0">
            <span data-testid="username" className="d-inline-block" style={{ paddingTop: '.2rem' }}>
              {user.username}
              <img
                data-testid="avatar"
                src={userImg}
                style={{ width: 26, margin: '-3px 0 0 7px' }}
                className="rounded"
                alt="avatar"
              />
            </span>
          </div>
          <div className="col-5 col-xs-4 col-md-2">
            <button
              data-testid="sign-out-button"
              className="bttn secondary solid btn-sm"
              type="button"
              onClick={signOut}
            >
              Sign Out
            </button>
          </div>
        </Wrapp>
      </div>
      <div className="border-bottom bg-light">
        <Wrapp className="py-5">
          <div className="col-7 col-md-10">
            <h2 className="header-title">
              <Link to="/books">JS Book Store</Link>
            </h2>
          </div>
          <div className="col-5 col-md-2">
            <div className="d-flex flex-column justify-content-center h-100">
              <Link data-testid="cart-button" to="/cart" className="bttn light">
                <img className="bttn-img" src={cartIcon} alt="cart" />
                Cart
                {' '}
                <b>
                  (
                  {cart.length}
                  )
                </b>
              </Link>
            </div>
          </div>
        </Wrapp>
      </div>
    </header>
  );
}
