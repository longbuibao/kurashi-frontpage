-- DropForeignKey
ALTER TABLE "PageMetadata" DROP CONSTRAINT "PageMetadata_pageTitleId_fkey";

-- AlterTable
ALTER TABLE "PageMetadata" ALTER COLUMN "pageTitleId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "PageMetadata" ADD CONSTRAINT "PageMetadata_pageTitleId_fkey" FOREIGN KEY ("pageTitleId") REFERENCES "PageTitle"("id") ON DELETE SET NULL ON UPDATE CASCADE;
