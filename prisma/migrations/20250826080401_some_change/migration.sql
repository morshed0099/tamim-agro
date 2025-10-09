/*
  Warnings:

  - Added the required column `unitPrice` to the `feedNameCategory` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Source" AS ENUM ('FACTORY', 'PURCHESS');

-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('RETURN', 'SALES', 'TRANSFERIN', 'TRANSFEROUT', 'INITIAL');

-- AlterEnum
ALTER TYPE "DeliveryStatus" ADD VALUE 'CANCEL';

-- AlterTable
ALTER TABLE "feedNameCategory" ADD COLUMN     "unitPrice" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "feedRetun" ADD COLUMN     "status" "DeliveryStatus" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "feedStockTransfer" ADD COLUMN     "status" "DeliveryStatus" NOT NULL DEFAULT 'PENDING';

-- CreateTable
CREATE TABLE "addStock" (
    "id" TEXT NOT NULL,
    "source" "Source" NOT NULL DEFAULT 'FACTORY',
    "depotName" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "addStock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AddStockItem" (
    "id" TEXT NOT NULL,
    "feedName" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "addStockId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AddStockItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feedStockHistory" (
    "id" TEXT NOT NULL,
    "feedName" TEXT NOT NULL,
    "depotName" TEXT NOT NULL,
    "opening" INTEGER NOT NULL DEFAULT 0,
    "sales" INTEGER NOT NULL DEFAULT 0,
    "return" INTEGER NOT NULL DEFAULT 0,
    "transferIn" INTEGER NOT NULL DEFAULT 0,
    "transferOut" INTEGER NOT NULL DEFAULT 0,
    "createAt" TIMESTAMP(3) NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "feedStockHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feedTransactionHeader" (
    "id" TEXT NOT NULL,
    "depotName" TEXT NOT NULL,
    "refId" TEXT NOT NULL,
    "transactionType" "TransactionType" NOT NULL,
    "status" "DeliveryStatus" NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "feedTransactionHeader_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "feedStockHistory_depotName_feedName_key" ON "feedStockHistory"("depotName", "feedName");

-- AddForeignKey
ALTER TABLE "addStock" ADD CONSTRAINT "addStock_depotName_fkey" FOREIGN KEY ("depotName") REFERENCES "depot"("depotName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AddStockItem" ADD CONSTRAINT "AddStockItem_feedName_fkey" FOREIGN KEY ("feedName") REFERENCES "feedNameCategory"("feedName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AddStockItem" ADD CONSTRAINT "AddStockItem_addStockId_fkey" FOREIGN KEY ("addStockId") REFERENCES "addStock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedStockHistory" ADD CONSTRAINT "feedStockHistory_feedName_fkey" FOREIGN KEY ("feedName") REFERENCES "feedNameCategory"("feedName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedStockHistory" ADD CONSTRAINT "feedStockHistory_depotName_fkey" FOREIGN KEY ("depotName") REFERENCES "depot"("depotName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedTransactionHeader" ADD CONSTRAINT "feedTransactionHeader_depotName_fkey" FOREIGN KEY ("depotName") REFERENCES "depot"("depotName") ON DELETE RESTRICT ON UPDATE CASCADE;
