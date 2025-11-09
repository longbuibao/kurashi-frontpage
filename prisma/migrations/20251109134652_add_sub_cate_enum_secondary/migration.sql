/*
  Warnings:

  - You are about to drop the column `subType` on the `SubCategory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SecondaryCategory" ADD COLUMN     "subType" "SubCategoryType" NOT NULL DEFAULT 'PHU_KIEN_NAM_CHAM';

-- AlterTable
ALTER TABLE "SubCategory" DROP COLUMN "subType";
