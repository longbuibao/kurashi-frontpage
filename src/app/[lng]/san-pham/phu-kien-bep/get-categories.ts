import prisma from '@/lib/prisma'

interface GetCategories {
  count: number
  name: string
  thumbnail: string
  key: string | undefined
  order: number
  url: string
}

export const getCategories = async (): Promise<GetCategories[]> => {
  const allCategoriesWithCount = await prisma.product.groupBy({
    by: ['categoryId', 'order'],
    where: {
      isAccessoryProduct: true
    },
    _count: {
      _all: true
    }
  })

  const categoriesWithNameAndThumbnail = await prisma.category.findMany({
    select: {
      name: true,
      thumbnail: true,
      id: true,
      order: true,
      categoryUniqueName: true
    }
  })

  const categories = allCategoriesWithCount.map(x => {
    const count = x._count._all
    const category = categoriesWithNameAndThumbnail.find(y => y.id === x.categoryId)

    return {
      count,
      name: category?.name ?? '',
      thumbnail: category?.thumbnail ?? '#',
      key: category?.id,
      order: category?.order ?? 0,
      url: category?.categoryUniqueName ?? ''
    }
  })

  return categories
}
