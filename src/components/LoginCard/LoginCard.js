import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userImg from '../../img/unknown-guy.svg';
import { signin } from '../../store/actions/userActions';
import LoginForm from '../LoginForm';

export default function LoginCard() {
  const [username, setUsername] = useState('');
  const [errorText, setErrorText] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (username.length < 4 || username.length > 16) {
      setErrorText('Username is not valid');
      return;
    }

    setErrorText(null);

    dispatch(signin(username));
  };

  return (
    <div data-testid="Login" className="card login-card">
      <div className="card-header">Login</div>
      <img
        className="card-img-top px-5 pt-4"
        src={userImg}
        alt="avatar"
      />
      {user.token === null && (
        <div className="card-body">
          <LoginForm
            handleSubmitForm={handleSubmitForm}
            username={[username, setUsername]}
            errorText={errorText}
          />
        </div>
      )}
      {user.token !== null && (
        <div className="card-body text-center">
          <h3>
            Welcome,
            {' '}
            {user.username}
          </h3>
          <h6 className="text-muted">Redirecting...</h6>
        </div>
      )}
    </div>
  );
}
