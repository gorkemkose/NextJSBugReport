// components/layouts/Footer.js
import classNames from 'classnames/bind'
import PackCard from './components/PackCard'
import Category from './components/Category'

import SearchBar from './components/SearchBar'
import styles from './styles/sarachane.module.css'

const cx = classNames.bind(styles)

function Sarachane() {
  return (
    <main
      className={cx(
        'mainArea',
        'flex',
        'min-h-screen',
        'flex-col',
        'items-center',
        'justify-between',
        'p-20',
      )}
    >
      <div className={styles.headerArea}>
        <p>
          Merhaba <span>Atakan</span>
        </p>
        <h1>Saraçhane</h1>
      </div>
      <div className={styles.searchArea}>
        <SearchBar />
        <button className={styles.sortButton}>
          <p>En Yeni</p>
          <img src="/icons/CaretDown.svg" alt="Icon" className={styles.icon} />
        </button>
        <button className={styles.myPackages}>
          <img src="/icons/Stack.svg" alt="Icon" className={styles.icon} />
          <p>Paketlerim</p>
        </button>
      </div>
      <div className={styles.categoryWrapper}>
        <Category isActive={true} categoryName="Önerilen" />
        <Category isActive={false} categoryName="Gümüş Paketler" />
        <Category isActive={false} categoryName="Altın Paketler" />
        <Category isActive={false} categoryName="Bayram Paketleri" />
      </div>
      <div className={cx('packagesWrapper', 'space-y-8')}>
        <PackCard />
        <PackCard />
        <PackCard />
        <PackCard />
      </div>
    </main>
  )
}

export default Sarachane
