-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "normalizedName" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "ProductFinish" ADD COLUMN     "normalizedName" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "SecondaryCategory" ADD COLUMN     "normalizedName" TEXT NOT NULL DEFAULT '';
