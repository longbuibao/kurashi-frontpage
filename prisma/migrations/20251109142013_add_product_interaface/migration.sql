-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "productInterfaceId" TEXT;

-- CreateTable
CREATE TABLE "ProductInterface" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductInterface_id_key" ON "ProductInterface"("id");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_productInterfaceId_fkey" FOREIGN KEY ("productInterfaceId") REFERENCES "ProductInterface"("id") ON DELETE SET NULL ON UPDATE CASCADE;
