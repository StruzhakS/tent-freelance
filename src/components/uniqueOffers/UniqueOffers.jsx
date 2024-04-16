import React from 'react'
import s from './UniqueOffers.module.css'
import { uniqueOffers } from 'constants/uniqueOffers'
import latka from '../../images/Latka.png'
import { useTranslation } from 'react-i18next'

const UniqueOffers = () => {
    const {t} = useTranslation()
  return (
    <section className={s.section}>
      <ul className={s.offersList}>
        {uniqueOffers.slice(0, 4).map(el => (
          <li key={el.id} className={s.offerItem}>
            <img
              className={s.offerImage}
              src={el.img ? el.img : latka}
              width={140}
              height={110}
              alt="latka"
            />
            <div className={s.description}>
              <h3 className={s.offerTitle}>{el.title}</h3>
              <p className={s.offerSize}>
                1 {t('Patch')} - {el.size}
              </p>
            </div>
            <p className={s.offerPrice}>{el.price}грн</p>
            <button type="button" className={s.offerBuyBtn}>
              {t('Order')}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UniqueOffers