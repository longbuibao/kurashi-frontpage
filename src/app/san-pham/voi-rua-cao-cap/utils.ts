import { Prisma } from '@prisma/client'

type ProductWithRelations = Prisma.ProductGetPayload<{
  include: {
    productImages: true
    productIntro: true
    category: true
    secondaryCategory: true
    finish: true
    material: true
    productInterface: true
  }
}>

export const createTitleVoiRuaDetailPage = (product: ProductWithRelations): string => {
  const secondaryCategoryName = product.secondaryCategory?.name ?? 'Uncategorized'
  const productFinish = product.finish?.name as unknown as string
  const categoryName = product.category?.name as unknown as string

  return `${categoryName} ${secondaryCategoryName} ${productFinish} ${product.sku}`
}
