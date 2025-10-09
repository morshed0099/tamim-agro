-- DropForeignKey
ALTER TABLE "transferFeedItem" DROP CONSTRAINT "transferFeedItem_feedName_fkey";

-- DropForeignKey
ALTER TABLE "transferFeedItem" DROP CONSTRAINT "transferFeedItem_tansferId_fkey";

-- AddForeignKey
ALTER TABLE "transferFeedItem" ADD CONSTRAINT "transferFeedItem_feedName_fkey" FOREIGN KEY ("feedName") REFERENCES "feedNameCategory"("feedName") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transferFeedItem" ADD CONSTRAINT "transferFeedItem_tansferId_fkey" FOREIGN KEY ("tansferId") REFERENCES "feedStockTransfer"("trnasferBill") ON DELETE CASCADE ON UPDATE CASCADE;
