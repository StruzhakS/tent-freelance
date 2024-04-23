import React from 'react'
import s from './UniqueOffers.module.css'
import { uniqueOffers } from 'constants/uniqueOffers'
import latka from '../../images/Latka.png'
import { useTranslation } from 'react-i18next'
import { isMobile } from 'constants/useMediaQueries'
import PaginatedUniqueOffers from 'components/paginatedUniqueOffers/PaginatedUniqueOffers'
import { NavLink } from 'react-router-dom'

function Items({ currentItems, t, isMobileScreen }) {
  return (
    <ul className={s.offersList}>
      {currentItems.map(el => (
        <li key={el.id} className={s.offerItem}>
          <img
            className={s.offerImage}
            src={el.img ? el.img : latka}
            alt="latka"
          />
          <div className={s.description}>
            <h3 className={s.offerTitle}>{el.title}</h3>

            {!isMobileScreen && (
              <p className={s.itemDescription}>{el.description}</p>
            )}
            {isMobileScreen && (
              <p className={s.offerSize}>
                1 {t('Patch')} - {el.size}
              </p>
            )}
          </div>
          {isMobileScreen && (
            <>
              {' '}
              <p className={s.offerPrice}>{el.price}грн</p>
              <button type="button" className={s.offerBuyBtn}>
                {t('Order')}
              </button>
            </>
          )}
          {!isMobileScreen && (
            <>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  marginTop: '20px',
                  alignItems: 'center',
                }}
              >
                <p className={s.offerPrice}>{el.price}грн</p>
                <NavLink to={'promotions'} type="button" className={s.offerBuyBtn}>
                  {t('Order')}
                </NavLink>
              </div>
              <div className={s.promotionWrapper}>
                <p className={s.promotionDesktop}>Акция действует: </p>
                <div>
                  <span>
                    <span className={s.firstLetters}>
                      {el.startPromotioin.substring(0, 6)}
                    </span>
                    {el.startPromotioin.substring(6)}
                  </span>{' '}
                  -
                  <span>
                    <span className={s.firstLetters}>
                      {el.endPromotion.substring(0, 6)}
                    </span>
                    {el.endPromotion.substring(6)}
                  </span>
                </div>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

const UniqueOffers = () => {
  const { t } = useTranslation()
const isMobileScreen = isMobile()

const visibleOffers = isMobileScreen ? uniqueOffers.slice(0, 4) : uniqueOffers
  
  return (
    <section className={s.section}>
      {isMobileScreen ? (
        <Items
          currentItems={visibleOffers}
          t={t}
          isMobileScreen={isMobileScreen}
        />
      ) : (
        <PaginatedUniqueOffers
          itemsPerPage={4}
          items={uniqueOffers}
          Items={Items}
        />
      )}
    </section>
  );
}

export default UniqueOffers