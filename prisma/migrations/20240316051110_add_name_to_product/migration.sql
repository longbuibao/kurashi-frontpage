/*
  Warnings:

  - Added the required column `name` to the `ProductComponent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductComponent" ADD COLUMN     "name" TEXT NOT NULL;
