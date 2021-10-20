import styles from './ActiveFilters.module.css'
import PropTypes, { string, func } from 'prop-types'

const { container, appliedFilter, clearAll } = styles

export default function ActiveFilters ({ color, price, categoryTag, handleFiltersReset }) {
  return (
    <>
      <div className={container}>
        <div>
          <span>Searching for: </span>
          {color && <span className={appliedFilter}>{color}</span>}
          {price && <span className={appliedFilter}>{`${(Number(price))}-${(Number(price) + 100)}€`}</span>}
          {categoryTag && <span className={appliedFilter}>{categoryTag}</span>}
        </div>
        <div>
          <span onClick={handleFiltersReset} id={clearAll}>x Clear all</span>
        </div>
      </div>
    </>
  )
}

ActiveFilters.propTypes = {
  color: string,
  price: string,
  categoryTag: string,
  handleFiltersReset: func
}
