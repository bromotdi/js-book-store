import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Catalog from '../../components/Catalog/Catalog';
import CatalogControls from '../../components/CatalogControls';
import CatalogFilterNotFound from './CatalogFilterNotFound';
import Header from '../../components/Header';
import Spinner from '../../components/Spinner/Spinner';
import { loadBooks } from '../../store/actions/booksActions';
import { CLEAR_FILTER_BOOKS } from '../../store/types/booksTypes';

export default function CatalogPage() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Catalog';

    dispatch(loadBooks());

    return () => {
      dispatch({
        type: CLEAR_FILTER_BOOKS,
      });
    };
  }, [dispatch]);

  return (
    <>
      <Header />
      <CatalogControls />
      {books.isCatalogLoading && <Spinner size="lg" center />}
      {!books.isCatalogLoading && <Catalog items={books.filteredCatalog ?? books.catalog} />}
      {books.filteredCatalog && books.filteredCatalog.length === 0 && <CatalogFilterNotFound />}
    </>
  );
}
