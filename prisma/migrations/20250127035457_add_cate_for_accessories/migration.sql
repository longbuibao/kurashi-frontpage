-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "isCategoryOfKitchenAccessories" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "_ProductComponentToProductMaterial" ADD CONSTRAINT "_ProductComponentToProductMaterial_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_ProductComponentToProductMaterial_AB_unique";

-- AlterTable
ALTER TABLE "_ProductToProductOrigin" ADD CONSTRAINT "_ProductToProductOrigin_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_ProductToProductOrigin_AB_unique";

-- AlterTable
ALTER TABLE "_ProductToProductVariants" ADD CONSTRAINT "_ProductToProductVariants_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_ProductToProductVariants_AB_unique";
