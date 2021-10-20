import styles from './ProductsAvailable.module.css'
import PropTypes, { number } from 'prop-types'

const { numberOfProducts } = styles
export default function ProductsAvailable ({ productsAvailable }) {
  return <><p className={numberOfProducts}>{productsAvailable} products found</p></>
}

ProductsAvailable.propTypes = {
  productsAvailable: number.isRequired
}
