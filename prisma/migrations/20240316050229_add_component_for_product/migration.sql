/*
  Warnings:

  - You are about to drop the `_ProductToProductMaterial` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProductToProductMaterial" DROP CONSTRAINT "_ProductToProductMaterial_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToProductMaterial" DROP CONSTRAINT "_ProductToProductMaterial_B_fkey";

-- DropTable
DROP TABLE "_ProductToProductMaterial";

-- CreateTable
CREATE TABLE "ProductComponent" (
    "id" TEXT NOT NULL,
    "meterialId" TEXT,

    CONSTRAINT "ProductComponent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductComponentToProductMaterial" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductComponentToProductMaterial_AB_unique" ON "_ProductComponentToProductMaterial"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductComponentToProductMaterial_B_index" ON "_ProductComponentToProductMaterial"("B");

-- AddForeignKey
ALTER TABLE "ProductComponent" ADD CONSTRAINT "ProductComponent_id_fkey" FOREIGN KEY ("id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductComponentToProductMaterial" ADD CONSTRAINT "_ProductComponentToProductMaterial_A_fkey" FOREIGN KEY ("A") REFERENCES "ProductComponent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductComponentToProductMaterial" ADD CONSTRAINT "_ProductComponentToProductMaterial_B_fkey" FOREIGN KEY ("B") REFERENCES "ProductMaterial"("id") ON DELETE CASCADE ON UPDATE CASCADE;
