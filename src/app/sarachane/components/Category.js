import styles from '../styles/category.module.css' // Adjust the import path

function Category({ isActive, categoryName }) {
  return (
    <button className={!isActive ? styles.category : styles.activeCategory}>
      <p>{categoryName}</p>
    </button>
  )
}

export default Category
