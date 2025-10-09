-- CreateTable
CREATE TABLE "feedStock" (
    "id" TEXT NOT NULL,
    "feedName" TEXT NOT NULL,
    "depotName" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "unitPrice" INTEGER NOT NULL DEFAULT 0,
    "createAt" TIMESTAMP(3) NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "feedStock_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "feedStock_depotName_feedName_key" ON "feedStock"("depotName", "feedName");

-- AddForeignKey
ALTER TABLE "feedStock" ADD CONSTRAINT "feedStock_depotName_fkey" FOREIGN KEY ("depotName") REFERENCES "depot"("depotName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedStock" ADD CONSTRAINT "feedStock_feedName_fkey" FOREIGN KEY ("feedName") REFERENCES "feedNameCategory"("feedName") ON DELETE RESTRICT ON UPDATE CASCADE;
