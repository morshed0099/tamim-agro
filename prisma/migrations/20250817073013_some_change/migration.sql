-- AlterTable
ALTER TABLE "feedStockTransfer" ADD COLUMN     "totalKg" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "totalPrice" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "transferFeedItem" ADD COLUMN     "price" INTEGER NOT NULL DEFAULT 0;
