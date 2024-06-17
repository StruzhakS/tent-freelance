import React, { useRef } from 'react'
import s from './UniqueOffers.module.css'
import { uniqueOffers } from 'constants/uniqueOffers'
import { useTranslation } from 'react-i18next'
import { isMobile } from 'constants/useMediaQueries'
import PaginatedUniqueOffers from 'components/paginatedUniqueOffers/PaginatedUniqueOffers'
import ListOfUniqOffers from 'components/listOfUniqOffers/ListOfUniqOffers'

const UniqueOffers = () => {
  const { t } = useTranslation()
const isMobileScreen = isMobile()
  
// const visibleOffers = isMobileScreen ? uniqueOffers.slice(0, 4) : uniqueOffers

  const sectionRef = useRef(null);

  const handleSectionFocus = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={s.section} ref={sectionRef}>
      {isMobileScreen ? (
        <ListOfUniqOffers
          currentItems={uniqueOffers}
          t={t}
          isMobileScreen={isMobileScreen}
          sectionRef={sectionRef}
        />
      ) : (
        <PaginatedUniqueOffers
          itemsPerPage={4}
          items={uniqueOffers}
          Items={ListOfUniqOffers}
          handleSectionFocus={handleSectionFocus}
        />
      )}
    </section>
  );
}

export default UniqueOffers