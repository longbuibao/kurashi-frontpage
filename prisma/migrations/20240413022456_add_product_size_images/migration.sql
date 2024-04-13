/*
  Warnings:

  - You are about to drop the column `productSizeImage` on the `ProductSize` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProductImages" ADD COLUMN     "productSizeId" TEXT;

-- AlterTable
ALTER TABLE "ProductSize" DROP COLUMN "productSizeImage";

-- AddForeignKey
ALTER TABLE "ProductImages" ADD CONSTRAINT "ProductImages_productSizeId_fkey" FOREIGN KEY ("productSizeId") REFERENCES "ProductSize"("id") ON DELETE SET NULL ON UPDATE CASCADE;
