/*
  Warnings:

  - Made the column `hasLandingPage` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `landingPageUrl` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "hasLandingPage" SET NOT NULL,
ALTER COLUMN "landingPageUrl" SET NOT NULL,
ALTER COLUMN "landingPageUrl" SET DEFAULT '#';
