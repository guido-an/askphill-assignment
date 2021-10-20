import { useState } from 'react'
import useFilteredProducts from '../hooks/useFilteredProducts'
import AppContainer from '../components/atoms/AppContainer/AppContainer'
import Loading from '../components/atoms/Loading/Loading'
import Products from '../components/Products/Products'
import Filters from '../components/Filters/Filters'
import ActiveFilters from '../components/Filters/ActiveFilters/ActiveFilters'
import ProductsAvailable from '../components/Products/ProductsAvailable/ProductsAvailable'
import PaginationButtons from '../components/PaginationButtons/PaginationButtons'

export default function Home () {
  const [pageIndex, setPageIndex] = useState(1)
  const [color, setColor] = useState(null)
  const [price, setPrice] = useState(null)
  const [categoryTag, setCategoryTag] = useState(null)

  const { data, error } = useFilteredProducts(pageIndex, color, price, categoryTag)

  if (error) return <p>Something went wrong!</p>
  if (!data) return <Loading />

  const { products, productsAvailable } = data

  function handleFiltersReset () {
    setColor(null)
    setPrice(null)
    setCategoryTag(null)
  }

  function handleColorChange (e) {
    setColor(e.target.value)
    setPageIndex(1)
  }
  function handlePriceChange (e) {
    setPrice(e.target.value)
    setPageIndex(1)
  }
  function handleCategoryChange (e) {
    setCategoryTag(e.target.value)
    setPageIndex(1)
  }

  return (
    <AppContainer>
      <Filters
        handleColorChange={handleColorChange}
        handlePriceChange={handlePriceChange}
        handleCategoryChange={handleCategoryChange}
        color={color}
        price={price}
        categoryTag={categoryTag}
      />
      {color || price || categoryTag
        ? <ActiveFilters
          color={color} price={price}
          categoryTag={categoryTag}
          handleFiltersReset={handleFiltersReset}
        />
        : <></>}
      <ProductsAvailable
        productsAvailable={productsAvailable}
      />
      <Products
        products={products}
      />
      <PaginationButtons
        handlePreviousPage={() => setPageIndex(pageIndex - 1)}
        handleNextPage={() => setPageIndex(pageIndex + 1)}
        pageIndex={pageIndex}
        productsAvailable={productsAvailable}
      />
    </AppContainer>
  )
}
