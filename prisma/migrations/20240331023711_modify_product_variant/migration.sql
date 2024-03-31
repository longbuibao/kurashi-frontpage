-- DropForeignKey
ALTER TABLE "ProductVariants" DROP CONSTRAINT "ProductVariants_id_fkey";

-- AlterTable
ALTER TABLE "ProductVariants" ADD COLUMN     "productId" TEXT;

-- AddForeignKey
ALTER TABLE "ProductVariants" ADD CONSTRAINT "ProductVariants_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
