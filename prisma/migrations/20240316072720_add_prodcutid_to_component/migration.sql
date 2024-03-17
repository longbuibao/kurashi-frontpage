-- DropForeignKey
ALTER TABLE "ProductComponent" DROP CONSTRAINT "ProductComponent_id_fkey";

-- AlterTable
ALTER TABLE "ProductComponent" ADD COLUMN     "productId" TEXT;

-- AddForeignKey
ALTER TABLE "ProductComponent" ADD CONSTRAINT "ProductComponent_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
