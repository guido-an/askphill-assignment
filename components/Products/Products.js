import styles from './Products.module.css'
import PropTypes, { array } from 'prop-types'
import Product from './Product/Product'

const { container } = styles
export default function Products ({ products }) {
  return (
    <section className={container}>
      {products.map((product, i) => <Product key={i} product={product} />)}
    </section>
  )
}

Products.propTypes = {
  products: array.isRequired
}
