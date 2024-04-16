import React from 'react'
import s from './SearchTents.module.css'
import search from '../../images/search.svg'

const SearchTents = ({t}) => {
    return (
      <>
        <div class={s.searchContainer}>
          <input
            type="text"
            className={s.searchInput}
            placeholder={t('What you looking for?')}
          />
          <button type="submit" className={s.searchButton}>
            {t('Search')}
            <img className={s.searchImage} src={search} alt="search" />
          </button>
        </div>
      </>
    );
}

export default SearchTents