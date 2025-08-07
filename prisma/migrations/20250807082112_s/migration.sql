/*
  Warnings:

  - You are about to drop the column `fromBranchCode` on the `StockTransfer` table. All the data in the column will be lost.
  - You are about to drop the `feed` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `FromDepotName` to the `StockTransfer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "feed" DROP CONSTRAINT "feed_branchCode_fkey";

-- DropForeignKey
ALTER TABLE "feed" DROP CONSTRAINT "feed_feedName_fkey";

-- AlterTable
ALTER TABLE "StockTransfer" DROP COLUMN "fromBranchCode",
ADD COLUMN     "FromDepotName" TEXT NOT NULL;

-- DropTable
DROP TABLE "feed";

-- CreateTable
CREATE TABLE "depot" (
    "id" TEXT NOT NULL,
    "locationName" TEXT NOT NULL,
    "depotName" TEXT NOT NULL,
    "createDate" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "depot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feedStoc" (
    "id" TEXT NOT NULL,
    "feedName" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "depotName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "branchId" TEXT,

    CONSTRAINT "feedStoc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feedStockTransfer" (
    "id" TEXT NOT NULL,
    "fromDepot" TEXT NOT NULL,
    "toDepot" TEXT NOT NULL,
    "transerFerDate" TEXT NOT NULL,
    "createDate" TEXT NOT NULL,
    "trnasferBill" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "depotId" TEXT,

    CONSTRAINT "feedStockTransfer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transferFeedItem" (
    "id" TEXT NOT NULL,
    "feedName" TEXT NOT NULL,
    "createDate" TEXT NOT NULL,
    "quntity" TEXT NOT NULL,
    "tansferId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transferFeedItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "depot_depotName_key" ON "depot"("depotName");

-- CreateIndex
CREATE INDEX "depot_depotName_idx" ON "depot"("depotName");

-- CreateIndex
CREATE INDEX "feedStoc_feedName_depotName_idx" ON "feedStoc"("feedName", "depotName");

-- CreateIndex
CREATE UNIQUE INDEX "feedStockTransfer_trnasferBill_key" ON "feedStockTransfer"("trnasferBill");

-- CreateIndex
CREATE INDEX "feedStockTransfer_trnasferBill_idx" ON "feedStockTransfer"("trnasferBill");

-- AddForeignKey
ALTER TABLE "feedStoc" ADD CONSTRAINT "feedStoc_feedName_fkey" FOREIGN KEY ("feedName") REFERENCES "feedNameCategory"("feedName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedStoc" ADD CONSTRAINT "feedStoc_depotName_fkey" FOREIGN KEY ("depotName") REFERENCES "depot"("depotName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedStoc" ADD CONSTRAINT "feedStoc_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedStockTransfer" ADD CONSTRAINT "feedStockTransfer_fromDepot_fkey" FOREIGN KEY ("fromDepot") REFERENCES "depot"("depotName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedStockTransfer" ADD CONSTRAINT "feedStockTransfer_toDepot_fkey" FOREIGN KEY ("toDepot") REFERENCES "depot"("depotName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transferFeedItem" ADD CONSTRAINT "transferFeedItem_feedName_fkey" FOREIGN KEY ("feedName") REFERENCES "feedNameCategory"("feedName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transferFeedItem" ADD CONSTRAINT "transferFeedItem_tansferId_fkey" FOREIGN KEY ("tansferId") REFERENCES "feedStockTransfer"("trnasferBill") ON DELETE RESTRICT ON UPDATE CASCADE;
