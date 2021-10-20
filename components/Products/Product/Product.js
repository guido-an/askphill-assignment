import styles from './Product.module.css'
import PropTypes, { object } from 'prop-types'
import Image from 'next/image'

const { container } = styles
export default function Product ({ product }) {
  const { thumbnailImage, name, shopifyProductEu } = product.node
  const { url } = thumbnailImage.file
  const { price } = shopifyProductEu.variants.edges[0].node
  return (
    <>
      <div className={container}>
        <Image src={`https:${url}`} width='300' height='300' />
        <p><strong>{name}</strong> </p>
        <p>{`${price}€`}</p>
      </div>
    </>
  )
}

Product.propTypes = {
  product: object.isRequired
}
