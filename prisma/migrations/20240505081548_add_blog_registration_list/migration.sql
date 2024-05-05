-- CreateTable
CREATE TABLE "BlogRegistrationList" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BlogRegistrationList_pkey" PRIMARY KEY ("id")
);
