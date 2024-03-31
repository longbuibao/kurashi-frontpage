/*
  Warnings:

  - You are about to drop the column `productId` on the `ProductVariants` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductVariants" DROP CONSTRAINT "ProductVariants_productId_fkey";

-- AlterTable
ALTER TABLE "ProductVariants" DROP COLUMN "productId";

-- CreateTable
CREATE TABLE "_ProductToProductVariants" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToProductVariants_AB_unique" ON "_ProductToProductVariants"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToProductVariants_B_index" ON "_ProductToProductVariants"("B");

-- AddForeignKey
ALTER TABLE "_ProductToProductVariants" ADD CONSTRAINT "_ProductToProductVariants_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToProductVariants" ADD CONSTRAINT "_ProductToProductVariants_B_fkey" FOREIGN KEY ("B") REFERENCES "ProductVariants"("id") ON DELETE CASCADE ON UPDATE CASCADE;
