// components/layouts/Footer.js

import styles from '../styles/packcard.module.css' // Adjust the import path
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

function PackCard() {
  return (
    <div className={cx('container', 'grid', 'grid-cols-12', 'gap-4')}>
      <div className={cx('packImage', 'col-span-4')}>
        <img src="/images/Pack1.png" className={styles.packImg} />
      </div>
      <div
        className={cx('descArea', 'col-span-8', 'grid', 'grid-cols-8', 'gap-4')}
      >
        <div className={cx('packDesc', 'col-span-6')}>
          <div className={styles.packNameArea}>
            <div className={styles.collection}>
              <p>Pack Collection</p>
            </div>
            <div>
              <h3 className={styles.title}>
                Lorem Ipsum Very Long Long Long Named Pack
              </h3>
            </div>
            <div>
              <p className={styles.availability}>78/100 Mevcut</p>
            </div>
          </div>
          <div>
            <p className={styles.descText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris.
            </p>
          </div>
        </div>
        <div className={cx('packBuy', 'col-span-2')}>
          <div className={styles.buyArea}>
            <div>
              <h3 className={styles.price}>120.00 TL</h3>
            </div>
            <div className={styles.buttonArea}>
              <button href="#" className={styles.gradientButton}>
                <p>Hemen Satın Al</p>
              </button>
              <button href="#" className={styles.flatButton}>
                <p>İncele</p>
                <img
                  src="/icons/ArrowRight.svg"
                  alt="Icon"
                  className={styles.icon}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackCard
