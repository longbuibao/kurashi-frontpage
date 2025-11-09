import { Prisma } from '@prisma/client'

type ProductWithRelations = Prisma.ProductGetPayload<{
  include: {
    productImages: true
    productIntro: true
    category: true
    secondaryCategory: true
    finish: true
  }
}>

export const createTitleVoiRuaDetailPage = (product: ProductWithRelations): string => {
  const secondaryCategoryName = product.secondaryCategory?.name ?? 'Uncategorized'
  const productFinish = product.finish?.name as unknown as string

  return product.name + secondaryCategoryName + productFinish
}
