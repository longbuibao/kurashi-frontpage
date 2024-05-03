-- CreateTable
CREATE TABLE "PageMetadata" (
    "id" TEXT NOT NULL,
    "pageTitleId" TEXT NOT NULL,

    CONSTRAINT "PageMetadata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PageTitle" (
    "id" TEXT NOT NULL,
    "page" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "PageTitle_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PageMetadata" ADD CONSTRAINT "PageMetadata_pageTitleId_fkey" FOREIGN KEY ("pageTitleId") REFERENCES "PageTitle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
