/*
  Warnings:

  - Added the required column `deliveryDate` to the `AddStockItem` table without a default value. This is not possible if the table is not empty.
  - Made the column `createAt` on table `RetunFeedItem` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `deliveryDate` to the `feedRetun` table without a default value. This is not possible if the table is not empty.
  - Made the column `createAt` on table `feedRetun` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `deliveryDate` to the `feedSalesOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryDate` to the `feedStockTransfer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AddStockItem" ADD COLUMN     "deliveryDate" DATE NOT NULL;

-- AlterTable
ALTER TABLE "RetunFeedItem" ALTER COLUMN "createAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "feedRetun" ADD COLUMN     "deliveryDate" DATE NOT NULL,
ALTER COLUMN "createAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "feedSalesOrder" ADD COLUMN     "deliveryDate" DATE NOT NULL;

-- AlterTable
ALTER TABLE "feedStockTransfer" ADD COLUMN     "deliveryDate" DATE NOT NULL;
