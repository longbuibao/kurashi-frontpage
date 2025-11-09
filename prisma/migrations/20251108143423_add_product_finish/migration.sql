-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "finishId" TEXT;

-- CreateTable
CREATE TABLE "ProductFinish" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ProductFinish_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_finishId_fkey" FOREIGN KEY ("finishId") REFERENCES "ProductFinish"("id") ON DELETE SET NULL ON UPDATE CASCADE;
