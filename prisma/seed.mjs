import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createTitleVoiRuaDetailPage = (product) => {
  const secondaryCategoryName = product.secondaryCategory?.name ?? 'Uncategorized'
  const productFinish = product.finish?.name ?? ''
  const categoryName = product.category?.name ?? ''

  return `${categoryName} ${secondaryCategoryName} ${productFinish} ${product.sku}`
}

async function main () {
  const products = await prisma.product.findMany({
    where: {
      categoryId: {
        in: ['f37db352-606b-4f64-877a-d5e92127ea7b']
      }
    },
    include: {
      productImages: true,
      productIntro: true,
      category: true,
      secondaryCategory: true,
      finish: true,
      material: true,
      productInterface: true
    }
  })

  console.log(`Found ${products.length} products`)

  for (const product of products) {
    const title = createTitleVoiRuaDetailPage(product)

    const updatedContent = product.shortIntro.replace('{0}', title)
    console.log(`Updating Product ${product.id} → Title: ${updatedContent}`)

    await prisma.product.update({
      where: { id: product.id },
      data: {
        shortIntro: updatedContent
      }
    })
  }
}

main()
  .then(() => {
    console.log('Seed completed successfully.')
  })
  .catch((err) => {
    console.error(err)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
