-- CreateTable
CREATE TABLE "ProductIntro" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "introImg" TEXT NOT NULL,
    "productId" TEXT,

    CONSTRAINT "ProductIntro_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductIntro" ADD CONSTRAINT "ProductIntro_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
