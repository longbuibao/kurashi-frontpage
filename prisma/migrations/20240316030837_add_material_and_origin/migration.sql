-- CreateTable
CREATE TABLE "ProductMaterial" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ProductMaterial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductOrigin" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ProductOrigin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductToProductMaterial" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProductToProductOrigin" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToProductMaterial_AB_unique" ON "_ProductToProductMaterial"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToProductMaterial_B_index" ON "_ProductToProductMaterial"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToProductOrigin_AB_unique" ON "_ProductToProductOrigin"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToProductOrigin_B_index" ON "_ProductToProductOrigin"("B");

-- AddForeignKey
ALTER TABLE "_ProductToProductMaterial" ADD CONSTRAINT "_ProductToProductMaterial_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToProductMaterial" ADD CONSTRAINT "_ProductToProductMaterial_B_fkey" FOREIGN KEY ("B") REFERENCES "ProductMaterial"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToProductOrigin" ADD CONSTRAINT "_ProductToProductOrigin_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToProductOrigin" ADD CONSTRAINT "_ProductToProductOrigin_B_fkey" FOREIGN KEY ("B") REFERENCES "ProductOrigin"("id") ON DELETE CASCADE ON UPDATE CASCADE;
