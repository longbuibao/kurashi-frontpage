export interface KurashiProduct {
  productInformation: ProductInformation
  productStructure: ProductStructure
  productDimension: ProductDimension
}

export interface ProductDimension {
  sample: Sample
  availableDimension: AvailableDimension[]
}

export interface AvailableDimension {
  name: string
  unit: string
  images: string[]
  tableData?: TableData
}

export interface TableData {
  colDefs: string[]
  rowData: RowData[]
}

export interface RowData {
  productId: string
  dimension: { [key: string]: number }
  quantityPerBox: number
  cad2d: string
  userManual: string
}

export interface Sample {
  imageUrl: string
}

export interface ProductInformation {
  productName: string
  productMaterial: string[]
  productOrigin: string[]
  productImageUrl: string
}

export interface ProductStructure {
  [key: string]: any
}
