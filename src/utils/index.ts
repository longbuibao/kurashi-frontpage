import { ProductQueryResult } from '@/types'

export const sleep = async (delay: number): Promise<any> => await new Promise((resolve) => setTimeout(resolve, delay))

export const createCategoryMapToProducts = (productsRaw: ProductQueryResult[]): Map<string, ProductQueryResult[]> => {
  return productsRaw.reduce((acc, product): Map<string, ProductQueryResult[]> => {
    if (product.category !== null) {
      const key = product.category.name
      if (key !== undefined && key !== '' && key !== null && acc.has(key)) {
        const value = acc.get(key)
        if (value !== undefined) {
          acc.set(key, [...value, product])
          return acc
        }
      } else {
        acc.set(key, [product])
        return acc
      }
    }
    return acc
  }, new Map<string, ProductQueryResult[]>())
}
