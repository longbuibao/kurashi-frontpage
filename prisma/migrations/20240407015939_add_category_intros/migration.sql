-- CreateTable
CREATE TABLE "CategoryIntro" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "categoryId" TEXT,

    CONSTRAINT "CategoryIntro_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CategoryIntro" ADD CONSTRAINT "CategoryIntro_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
