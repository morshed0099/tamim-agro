/*
  Warnings:

  - You are about to drop the column `totalPrice` on the `feedSalesItem` table. All the data in the column will be lost.
  - Added the required column `Price` to the `feedSalesItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "feedSalesItem" DROP COLUMN "totalPrice",
ADD COLUMN     "Price" INTEGER NOT NULL;
