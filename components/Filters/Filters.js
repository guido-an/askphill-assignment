import styles from './Filters.module.css'
import PropTypes, { func, string } from 'prop-types'

const { container, selectInput } = styles

export default function Filters ({
  handleColorChange,
  handlePriceChange,
  handleCategoryChange,
  color,
  price,
  categoryTag
}) {
  return (
    <div className={container}>
      <p>Filter by:</p>
      <select
        onChange={handleColorChange}
        className={selectInput}
        key={color || 'color'}
        defaultValue={color || undefined}
      >
        <option>Color</option>
        <option value='Black'>Black</option>
        <option value='Blue'>Blue</option>
        <option value='Brown'>Brown</option>
        <option value='Green'>Green</option>
        <option value='Natural'>Natural</option>
        <option value='Orange'>Orange</option>
        <option value='White'>White</option>
        <option value='Yellow'>Yellow</option>
      </select>
      <select
        onChange={handlePriceChange}
        className={selectInput}
        key={price || 'price'}
        defaultValue={price || undefined}
      >
        <option>Price</option>
        <option value='100.000'>100€ - 200€</option>
        <option value='200.000'>200€ - 300€</option>
        <option value='300.000'>300€ - 400€</option>
        <option value='400.000'>400€ - 500€</option>
        <option value='500.000'>500€ - 600€</option>
      </select>
      <select
        onChange={handleCategoryChange}
        className={selectInput}
        key={categoryTag || 'categoryTag'}
        defaultValue={categoryTag || undefined}
      >
        <option>Category</option>
        <option value='Ankle Boots'>Ankle Boots</option>
        <option value='Bags'>Bags</option>
        <option value='Mid-Heels'>Mid-Heels</option>
        <option value='Mini'>Mini</option>
        <option value='New Arrivals'>New Arrivals</option>
        <option value='Sandals'>Sandals</option>
      </select>
    </div>
  )
}

Filters.propTypes = {
  handleColorChange: func.isRequired,
  handlePriceChange: func.isRequired,
  handleCategoryChange: func.isRequired,
  color: string,
  price: string,
  categoryTag: string
}
