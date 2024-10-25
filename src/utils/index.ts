import { ProductQueryResult } from '@/types'
import { Metadata } from 'next'

// import prisma from '@/lib/prisma'

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

export enum tableHeaderRow {
  manualLink = 'manualLink',
  productId = 'productId',
  xdfLink = 'xdfLink',
  productQuantity = 'productQuantity'
}

export async function getMetadata (pageName: string, defaultIfNotFound: string): Promise<Metadata> {
  return {
    title: defaultIfNotFound
  }
}

export const strictCheckString = (input: string | null | undefined): boolean => {
  return input === undefined || input === null || input.length === 0 || input === ''
}

export const formatCurrency = (input: number): string => input.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

export const productColorGenerator = (color: string): string => {
  switch (color) {
    case '#D9D9D9':
      return 'w-5 h-5 rounded-xl bg-[#D9D9D9] border border-kurashi-border'
    case '#fff':
      return 'w-5 h-5 rounded-xl bg-[#fff] border border-kurashi-border'
    case '#000':
      return 'w-5 h-5 rounded-xl bg-[#000] border border-kurashi-border'
    default:
      return 'w-5 h-5 rounded-xl bg-[#fff] border border-kurashi-border'
  }
}
