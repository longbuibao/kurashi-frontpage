import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({ log: ['error', 'query'] })

export async function main () {
  const post1 = await prisma.post.create({
    data: {
      title: 'Post 1',
      content: 'Content of post 1',
      published: true,
      viewCount: 100,
      thumbnail: 'thumbnail1.jpg'
    }
  })

  const post2 = await prisma.post.create({
    data: {
      title: 'Post 2',
      content: 'Content of post 2',
      published: true,
      viewCount: 200,
      thumbnail: 'thumbnail2.jpg'
    }
  })

  const post3 = await prisma.post.create({
    data: {
      title: 'Post 3',
      content: 'Content of post 3',
      published: false,
      viewCount: 50,
      thumbnail: 'thumbnail3.jpg'
    }
  })

  await prisma.user.create({
    data: {
      email: 'user3@example.com',
      name: 'User 1',
      posts: {
        connect: [
          { id: post1.id },
          { id: post2.id }]
      }
    }
  })

  await prisma.user.create({
    data: {
      email: 'user2@example.com',
      name: 'User 2',
      posts: {
        connect: { id: post3.id }
      }
    }
  })

  const category1 = await prisma.category.create({
    data: {
      name: 'Category 1',
      isSpecialCategory: true
    }
  })

  const category2 = await prisma.category.create({
    data: {
      name: 'Category 2',
      isSpecialCategory: false
    }
  })

  const category3 = await prisma.category.create({
    data: {
      name: 'Category 3',
      isSpecialCategory: false
    }
  })

  const category4 = await prisma.category.create({
    data: {
      name: 'Category 4',
      isSpecialCategory: true
    }
  })

  const category5 = await prisma.category.create({
    data: {
      name: 'Category 5',
      isSpecialCategory: false
    }
  })

  const subCategory1 = await prisma.subCategory.create(
    {
      data: {
        name: 'Subcategory 1',
        thumbnail: 'subcategory1.jpg',
        category: {
          connect: {
            id: category1.id
          }
        }
      }
    }
  )

  const subCategory2 = await prisma.subCategory.create(
    {
      data: {
        name: 'Subcategory 2',
        thumbnail: 'subcategory2.jpg',
        category: {
          connect: {
            id: category2.id
          }
        }
      }
    }
  )

  const subCategory3 = await prisma.subCategory.create(
    {
      data: {
        name: 'Subcategory 3',
        thumbnail: 'subcategory3.jpg',
        category: {
          connect: {
            id: category3.id
          }
        }
      }
    }
  )

  const subCategory4 = await prisma.subCategory.create(
    {
      data: {
        name: 'Subcategory 4',
        thumbnail: 'subcategory2.jpg',
        category: {
          connect: {
            id: category2.id
          }
        }
      }
    }
  )

  const subCategory5 = await prisma.subCategory.create(
    {
      data: {
        name: 'Subcategory 5',
        thumbnail: 'subcategory3.jpg',
        category: {
          connect: {
            id: category3.id
          }
        }
      }
    }
  )

  await prisma.product.create(
    { data: { name: 'product1', category: { connect: { id: category1.id } }, subCategory: { connect: { id: subCategory1.id } } } }
  )

  await prisma.product.create(
    { data: { name: 'product2', category: { connect: { id: category1.id } }, subCategory: { connect: { id: subCategory1.id } } } }
  )
  await prisma.product.create(
    { data: { name: 'product3', category: { connect: { id: category2.id } }, subCategory: { connect: { id: subCategory3.id } } } }
  )
  await prisma.product.create(
    { data: { name: 'product4', category: { connect: { id: category5.id } }, subCategory: { connect: { id: subCategory4.id } } } }
  )
  await prisma.product.create(
    { data: { name: 'product5', category: { connect: { id: category3.id } }, subCategory: { connect: { id: subCategory2.id } } } }
  )

  await prisma.product.create(
    { data: { name: 'product6', category: { connect: { id: category3.id } }, subCategory: { connect: { id: subCategory2.id } } } }
  )

  await prisma.product.create(
    { data: { name: 'product7', category: { connect: { id: category4.id } }, subCategory: { connect: { id: subCategory5.id } } } }
  )
}

const tryToSeedProductAndSize = async () => {
  const product = await prisma.product.findFirst({
    where: { id: '0953416b-f68f-4fb7-b546-3f958b401d04' }
  })

  const metadata = await prisma.productMetadata.create({
    data: {
      Product: {
        connect: {
          id: product.id
        }
      }
    }
  })
}

tryToSeedProductAndSize()
