/*
  Warnings:

  - You are about to drop the `_ProductToProductVariants` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProductToProductVariants" DROP CONSTRAINT "_ProductToProductVariants_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToProductVariants" DROP CONSTRAINT "_ProductToProductVariants_B_fkey";

-- AlterTable
ALTER TABLE "ProductVariants" ADD COLUMN     "productId" TEXT;

-- DropTable
DROP TABLE "_ProductToProductVariants";

-- AddForeignKey
ALTER TABLE "ProductVariants" ADD CONSTRAINT "ProductVariants_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
