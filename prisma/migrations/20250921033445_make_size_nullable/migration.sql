/*
  Warnings:

  - You are about to drop the column `productSizeId` on the `ProductImages` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductImages" DROP CONSTRAINT "ProductImages_productSizeId_fkey";

-- AlterTable
ALTER TABLE "ProductImages" DROP COLUMN "productSizeId";
