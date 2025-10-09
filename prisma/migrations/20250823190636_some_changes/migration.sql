/*
  Warnings:

  - You are about to drop the column `buyerId` on the `birdSell` table. All the data in the column will be lost.
  - Added the required column `buyerAddress` to the `birdSell` table without a default value. This is not possible if the table is not empty.
  - Added the required column `buyerName` to the `birdSell` table without a default value. This is not possible if the table is not empty.
  - Added the required column `buyerPhoneNumber` to the `birdSell` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "birdSell" DROP COLUMN "buyerId",
ADD COLUMN     "buyerAddress" TEXT NOT NULL,
ADD COLUMN     "buyerName" TEXT NOT NULL,
ADD COLUMN     "buyerPhoneNumber" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "feedSalesOrder" ADD CONSTRAINT "feedSalesOrder_flockId_fkey" FOREIGN KEY ("flockId") REFERENCES "flock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
