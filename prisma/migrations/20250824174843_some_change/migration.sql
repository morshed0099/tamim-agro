/*
  Warnings:

  - Changed the type of `quantity` on the `transferFeedItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "transferFeedItem" DROP COLUMN "quantity",
ADD COLUMN     "quantity" INTEGER NOT NULL;
