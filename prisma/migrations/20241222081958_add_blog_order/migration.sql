/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "order" INTEGER NOT NULL DEFAULT -1;

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");
