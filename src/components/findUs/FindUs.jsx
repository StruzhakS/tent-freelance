import React from 'react'
import s from './FindUs.module.css'
import { useTranslation } from 'react-i18next';

const FindUs = () => {
    const {t} = useTranslation()
  return (
    <section className={s.section}>
      <h2 className={s.sectionTitle}>
        {t('Find us')}: <br /> <span>{t('Location')}</span>
      </h2>
    </section>
  );
}

export default FindUs