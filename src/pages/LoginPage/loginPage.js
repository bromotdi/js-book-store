import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import LoginCard from '../../components/LoginCard';

export default function LoginPage({ history }) {
  const user = useSelector((state) => state.user);

  useEffect(() => {
    document.title = 'Login';

    if (user.token !== null) {
      setTimeout(() => {
        history.replace('/catalog');
      }, 2000);
    }
  }, [user.token, history]);

  return (
    <div className="container full-height">
      <div className="row justify-content-center h-100">
        <div className="col-sm-6 col-xl-4">
          <div className="d-flex flex-column justify-content-center h-100">
            <LoginCard />
          </div>
        </div>
      </div>
    </div>
  );
}
