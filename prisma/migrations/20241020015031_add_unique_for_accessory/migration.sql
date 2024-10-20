/*
  Warnings:

  - A unique constraint covering the columns `[uniqueName]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "uniqueName" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Product_uniqueName_key" ON "Product"("uniqueName");
