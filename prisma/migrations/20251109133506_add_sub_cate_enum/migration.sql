-- CreateEnum
CREATE TYPE "SubCategoryType" AS ENUM ('PHU_KIEN_NAM_CHAM', 'VOI_RUA_CAO_CAP');

-- AlterTable
ALTER TABLE "SubCategory" ADD COLUMN     "subType" "SubCategoryType" NOT NULL DEFAULT 'PHU_KIEN_NAM_CHAM';
