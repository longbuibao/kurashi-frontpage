export interface KurashiCategory {
  categoryName: string
  kurashiCollection: KurashiCollection
  subCategories?: SubCategory[]
}

export interface KurashiCollection {
  hasKurashiCollection: boolean
  collectionName: string
  collectionCategories: CollectionCategory[]
}

export interface CollectionCategory {
  name: string
  thumbnail: string
}

export interface SubCategory {
  name: string
  thumbnail: string
}
