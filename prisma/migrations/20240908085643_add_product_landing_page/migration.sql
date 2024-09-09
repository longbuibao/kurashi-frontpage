-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "hasLandingPage" BOOLEAN DEFAULT false,
ADD COLUMN     "landingPageUrl" TEXT;
