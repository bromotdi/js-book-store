import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Wrapp from '../../components/Wrapp/Wrapp';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = '404 • Page not found';
  }, []);

  return (
    <Wrapp>
      <div className="col text-center mt-5 pt-5">
        <img
          alt="page not found"
          src="https://media.giphy.com/media/tvGOBZKNEX0ac/giphy-downsized-large.gif"
          className="w-100 mb-3 rounded"
        />
        <h1>Sorry, page not found</h1>
        <div>
          <Link className="btn btn-primary mt-3" to="/">Return to main page</Link>
        </div>
      </div>
    </Wrapp>
  );
}
