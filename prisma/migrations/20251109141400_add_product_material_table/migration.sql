/*
  Warnings:

  - You are about to drop the column `material` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "material",
ADD COLUMN     "materialId" TEXT;

-- CreateTable
CREATE TABLE "Material" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '#'
);

-- CreateIndex
CREATE UNIQUE INDEX "Material_id_key" ON "Material"("id");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Material"("id") ON DELETE SET NULL ON UPDATE CASCADE;
