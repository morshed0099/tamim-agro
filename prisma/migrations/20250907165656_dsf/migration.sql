/*
  Warnings:

  - You are about to drop the column `totalKg` on the `feedSalesOrder` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "feedSalesOrder" DROP COLUMN "totalKg",
ADD COLUMN     "totalQuantity" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "deliveryDate" DROP NOT NULL;
