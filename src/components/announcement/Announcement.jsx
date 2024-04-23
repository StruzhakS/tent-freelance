import React from 'react'
import s from './Announcement.module.css'
import { useTranslation } from 'react-i18next';
import { usedTents } from 'constants/usedTents';
import tentImg from '../../images/usedTent.png'
import logoPhone from '../../images/Phonetel.png'
// import usedTent from '../../images/usedTent.png'
// import { useNavigate } from 'react-router-dom';

const Announcement = ({id = 5}) => {
    const { t } = useTranslation()
    const tent = usedTents.find(el => el.id === id)
    const { title, createdAt,desciption,location,owner,price} = tent;

//  const navigate = useNavigate()

    return (
      <div className={s.announSection}>
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
            
        {/* <div>
          <h2 className={s.relatedAdsTitle}>{t('Related Ads')}</h2>
          <ul className={s.usedTentList}>
            {usedTents.slice(0, 4).map((el, i) => (
              <li
                className={s.usedTentItem}
                key={el.title + i}
                onClick={() => navigate('/used-tents')}
              >
                <img
                  className={s.usedTentImage}
                  src={el.img ? el.img : usedTent}
                  alt={el.title}
                />
                <p className={s.tentTitle}>{el.title}</p>
                <p className={s.tentPrice}>{el.price} грн</p>
                <p className={s.tentLocation}> {el.location}</p>
                <p className={s.date}> {el.createdAt}</p>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    );
}

export default Announcement