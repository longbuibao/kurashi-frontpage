-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "productId" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "ProductSize" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "twoDimCad" TEXT NOT NULL,
    "productManual" TEXT NOT NULL,
    "productId" TEXT,

    CONSTRAINT "ProductSize_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductSize_productId_key" ON "ProductSize"("productId");

-- AddForeignKey
ALTER TABLE "ProductSize" ADD CONSTRAINT "ProductSize_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
