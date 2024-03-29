import { Prisma } from '@prisma/client'

export type ProductQueryResult = Prisma.ProductGetPayload<{ include: { category: { select: { name: true, id: true } }, ProductColor: true, ProductTag: true } }>
