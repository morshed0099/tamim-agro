/*
  Warnings:

  - You are about to drop the column `createDate` on the `feedStockTransfer` table. All the data in the column will be lost.
  - You are about to drop the column `depotId` on the `feedStockTransfer` table. All the data in the column will be lost.
  - You are about to drop the column `totalKg` on the `feedStockTransfer` table. All the data in the column will be lost.
  - You are about to drop the column `transerFerDate` on the `feedStockTransfer` table. All the data in the column will be lost.
  - Made the column `createAt` on table `feedStockTransfer` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "feedStockTransfer" DROP COLUMN "createDate",
DROP COLUMN "depotId",
DROP COLUMN "totalKg",
DROP COLUMN "transerFerDate",
ADD COLUMN     "totalQuantity" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "createAt" SET NOT NULL,
ALTER COLUMN "createAt" DROP DEFAULT;
