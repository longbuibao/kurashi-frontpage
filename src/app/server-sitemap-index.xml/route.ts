import { getServerSideSitemapIndex } from 'next-sitemap'
import prisma from '@/lib/prisma'

export async function GET (request: Request): Promise<any> {
  const categories = await prisma.category.findMany({ where: { isCategoryOfKitchenAccessories: true } })
  return await getServerSideSitemapIndex(categories.map(x => `https://kurashi.com.vn/san-pham/phu-kien-bep/${x.categoryUniqueName}`))
}
