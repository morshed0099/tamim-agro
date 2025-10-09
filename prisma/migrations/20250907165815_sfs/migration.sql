/*
  Warnings:

  - You are about to drop the column `createDate` on the `feedSalesItem` table. All the data in the column will be lost.
  - You are about to drop the column `createDate` on the `feedSalesOrder` table. All the data in the column will be lost.
  - Made the column `createdAt` on table `feedSalesOrder` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "feedSalesItem" DROP COLUMN "createDate";

-- AlterTable
ALTER TABLE "feedSalesOrder" DROP COLUMN "createDate",
ALTER COLUMN "createdAt" SET NOT NULL;
