/*
  Warnings:

  - You are about to drop the column `isAdmin` on the `Catalog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Catalog" DROP COLUMN "isAdmin";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false;
