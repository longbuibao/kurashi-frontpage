-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "secondaryCategoryId" TEXT;

-- CreateTable
CREATE TABLE "SecondaryCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "content" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "SecondaryCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_secondaryCategoryId_fkey" FOREIGN KEY ("secondaryCategoryId") REFERENCES "SecondaryCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
