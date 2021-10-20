import productsFromJson from '../../products.json'
import { filterByPage, applyFilters } from '../../helpers/filterProducts'

const products = productsFromJson.data.allContentfulProductPage.edges

export default function handler (req, res) {
  const { pageIndex } = req.query
  const { color, price, categoryTag } = req.query

  if (!color && !price && !categoryTag) {
    const productsByPage = filterByPage(products, pageIndex)
    res.status(200).send({ products: productsByPage, productsAvailable: products.length })
  }
  if (color || price || categoryTag) {
    const filteredProducts = applyFilters(color, price, categoryTag)
    if (filteredProducts.length === 0) {
      res.status(200).send({ products: [], productsAvailable: 0 })
    } else {
      const productsByFilters = filterByPage(filteredProducts, pageIndex)
      res.status(200).send({ products: productsByFilters, productsAvailable: filteredProducts.length })
    }
  }
}
