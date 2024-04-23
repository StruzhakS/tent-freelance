import { isMobile } from 'constants/useMediaQueries';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import s from '../uniqueOffers/UniqueOffers.module.css';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PaginatedUniqueOffers = ({ itemsPerPage, items, Items }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const { t } = useTranslation();
  const isMobileScreen = isMobile();
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

 const isAccessToken = useSelector(state => !!state.auth.email);

console.log(isAccessToken);
  
  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items
        currentItems={currentItems}
        t={t}
        isMobileScreen={isMobileScreen}
      />
      <div style={{ position: 'relative' }}>
        <div>
          <NavLink className={`${s.link} ${s.addOgo}`} to={'add-announcement'}>
            {t('Add announcement')}
          </NavLink>
         { !isAccessToken &&
          <NavLink className={`${s.link} ${s.loginLink}`} to={'login'}>
            {t('Enter')}/ {t('Register')}
          </NavLink>}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="&rarr;"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel=" &larr;"
          renderOnZeroPageCount={null}
          containerClassName={s.paginationContainer}
          pageClassName={s.pageClassName}
          activeClassName={s.activePage}
        />
      </div>
    </>
  );
};

export default PaginatedUniqueOffers;
