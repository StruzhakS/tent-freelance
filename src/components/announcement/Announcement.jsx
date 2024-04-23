import React from 'react'
import s from './Announcement.module.css'
import { useTranslation } from 'react-i18next';
import { usedTents } from 'constants/usedTents';
import tentImg from '../../images/usedTent.png'
import logoPhone from '../../images/Phonetel.png'

const Announcement = ({id = 5}) => {
    const { t } = useTranslation()
    const tent = usedTents.find(el => el.id === id)
    const { title, createdAt,desciption,location,owner,price} = tent;

    return (
      <div className={s.announSection}>
        <h2 className={s.title}>{t('announcement')}</h2>
        <div className={s.annoucementWrapper}>
          <div className={s.imageBox}>
            <img className={s.image} src={tentImg} alt={title} />
          </div>
          <div className={s.description}>
            <h3 className={s.descTitle}>{title}</h3>
            <p className={s.desciption}>{desciption}</p>
          </div>
          <div className={s.ownerWrapper}>
            <p className={s.price}>{price}</p>
            <p className={s.owner}>{owner}</p>
            <a href="tel:+380501589860" className={s.callBtn}>
              <img src={logoPhone} alt="" />
              {t('Call')}
            </a>
            <div>
              <p className={s.location}>{location}</p>
              <p className={s.createdAt}>{createdAt}</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Announcement