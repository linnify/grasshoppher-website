import React from 'react';
import styles from './Breadcrumbs.module.scss';
import Link from 'next/link';

export const Breadcrumbs = ({ breadcrumbs }) => {
  
  const renderItem = (item, index, last) => {
    const activeClass = item.current ? `primary-color` : ''
    return (
      <div key={index} className={styles['breadcrumbs__item']}>
        <Link href={item.href}>
          <div className={`${styles['breadcrumbs__item--name']} ${activeClass}`}>{item.label}</div>
        </Link>
        {!last && <img src={'/icons/arrow-right.svg'} className={styles['breadcrumbs__item--arrow']}/> }
      </div>
    )
  }
  
  return (
    <div className={styles.breadcrumbs}>
      { breadcrumbs.map((item, index) => renderItem(item, index, index === breadcrumbs.length - 1))}
    </div>
  )
}
