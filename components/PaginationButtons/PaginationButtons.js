import styles from './PaginationButtons.module.css'
import PropTypes, { func, number } from 'prop-types'

const { container, disabled, pageNumber } = styles
export default function PaginationButtons ({
  handlePreviousPage,
  handleNextPage,
  pageIndex,
  productsAvailable
}) {
  return (
    <>
      <div className={container}>
        <button
          onClick={handlePreviousPage}
          className={pageIndex <= 1 ? disabled : undefined}
        >
           Previous
        </button>
        <button
          onClick={handleNextPage}
          className={productsAvailable / pageIndex <= 10 ? disabled : undefined}
        >
           Next
        </button>
      </div>
      {productsAvailable >= 1 && <p className={pageNumber}>Page {pageIndex}</p>}
    </>
  )
}

PaginationButtons.propTypes = {
  handlePreviousPage: func.isRequired,
  handleNextPage: func.isRequired,
  pageIndex: number.isRequired,
  productsAvailable: number.isRequired
}
