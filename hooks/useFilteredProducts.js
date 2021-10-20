import useSWR from 'swr'

export default function useFilteredProducts (pageIndex, color, price, categoryTag) {
  const searchParams = new URLSearchParams()

  searchParams.append('pageIndex', pageIndex)

  color && searchParams.append('color', color)
  price && searchParams.append('price', price)
  categoryTag && searchParams.append('categoryTag', categoryTag)

  const { data, error } = useSWR(`/api/products?${searchParams.toString()}`)

  return { data, error }
}
