import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LoginPage from './pages/LoginPage';
import CatalogPage from './pages/CatalogPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import { signinFromStorage } from './store/actions/userActions';
import Modal from './components/Modal';
import useRequestError from './hooks/useRequestError';

export default function App() {
  const user = useSelector((state) => state.user);
  const modal = useSelector((state) => state.modal);
  const error = useRequestError();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signinFromStorage());
  }, [user.token, dispatch]);

  if (user.token || localStorage.getItem('authUser')) {
    return (
      <>
        {error.isError && <Modal error data={error} />}
        {modal.message && <Modal data={modal} />}
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/">
              <Redirect to="/catalog" />
            </Route>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/catalog" component={CatalogPage} />
            <Route exact path="/cart" component={CartPage} />
            <Route path="/catalog/:id" component={ProductPage} />
            <Route exact path="/not-found" component={NotFoundPage} />
            <Route path="*">
              <Redirect to="/no-found" />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }

  return (
    <>
      {error.isError && <Modal error data={error} />}
      {modal.message && <Modal message={modal.message} />}
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/not-found" component={NotFoundPage} />
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
