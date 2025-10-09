/*
  Warnings:

  - You are about to drop the column `qunantity` on the `RetunFeedItem` table. All the data in the column will be lost.
  - You are about to drop the column `totalPice` on the `feedSalesItem` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `RetunFeedItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `feedSalesItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RetunFeedItem" DROP COLUMN "qunantity",
ADD COLUMN     "quantity" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "feedSalesItem" DROP COLUMN "totalPice",
ADD COLUMN     "totalPrice" INTEGER NOT NULL;
