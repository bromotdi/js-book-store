import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import ProductSingle from '../../components/ProductSingle/ProductSingle';
import { clearBookSingle, loadBookById } from '../../store/actions/booksActions';
import Spinner from '../../components/Spinner';

export default function ProductPage({ match }) {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const { id } = match.params;

  useEffect(() => {
    dispatch(loadBookById(id));

    return () => dispatch(clearBookSingle());
  }, [id, dispatch]);

  useEffect(() => {
    if (books.single) {
      document.title = books.single.title;
    }
  }, [books.single]);

  return (
    <>
      <Header />
      {books.isSingleLoading && <Spinner size="lg" center />}
      {!books.isSingleLoading && books.single && <ProductSingle product={books.single} />}
    </>
  );
}
