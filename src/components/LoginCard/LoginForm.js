import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../Spinner/Spinner';

export default function LoginForm({ handleSubmitForm, username, errorText }) {
  const user = useSelector((state) => state.user);
  const [usernameValue, setUsernameValue] = username;
  const onChangeInputHandler = useCallback(({ target }) => {
    setUsernameValue(target.value.trim());
  }, [setUsernameValue]);

  return (
    <form data-testid="login-form" onSubmit={handleSubmitForm}>
      <div className="form-group">
        <label htmlFor="username-input" className="w-100">
          Name
        </label>
        <input
          id="username-input"
          data-testid="username-input"
          type="text"
          className={`form-control ${errorText ? 'is-invalid' : ''}`}
          placeholder="David..."
          value={usernameValue}
          onChange={onChangeInputHandler}
        />
        <div className="invalid-feedback ">{errorText}</div>
      </div>
      <button className="btn btn-primary btn-block" type="submit" disabled={user.isLoading}>
        {user.isLoading && <Spinner as="span" />}
        Log in
      </button>
    </form>
  );
}
