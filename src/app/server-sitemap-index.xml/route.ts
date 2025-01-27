import { getServerSideSitemapIndex } from 'next-sitemap'
import prisma from '@/lib/prisma'

export async function GET (request: Request): Promise<any> {
  const categories = await prisma.category.findMany({ where: { isCategoryOfKitchenAccessories: true } })
  const products = await prisma.product.findMany({ where: { isAccessoryProduct: true } })

  const categoriesUrl = categories.map(x => `https://kurashi.com.vn/san-pham/phu-kien-bep/${x.categoryUniqueName}`)
  const productsUrl = products.map(x => `https://kurashi.com.vn/san-pham/phu-kien-bep/${x.uniqueName ?? '#'}`)

  return await getServerSideSitemapIndex([...categoriesUrl, ...productsUrl])
}
