import productsFromJson from '../products.json'

const products = productsFromJson.data.allContentfulProductPage.edges

export function filterByPage (products, pageIndex) {
  const pageSize = 9
  return products.slice((pageIndex - 1) * pageSize, pageIndex * pageSize)
}

export function applyFilters (color, price, categoryTag) {
  return products.filter(item => {
    const product = item.node
      if (color) {
        const checkColor = product.colorFamily?.[0].name === color
        if(!checkColor) return 
      }
      if (price) {
        const productPrice = Number(product.shopifyProductEu.variants.edges[0].node.price)
        const range = 100.00
        const minRange = Number(price)
        const maxRange = Number(price) + range
        const isBetweenPrices = productPrice >= minRange && productPrice <= maxRange ? true : false
        if(!isBetweenPrices) return
      }
      if (categoryTag) {
        const checkTag = !!product.categoryTags?.includes(categoryTag)
          if(!checkTag) return
      }
      return true
  })
}
