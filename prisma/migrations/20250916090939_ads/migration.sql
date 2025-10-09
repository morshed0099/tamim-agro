-- DropForeignKey
ALTER TABLE "RetunFeedItem" DROP CONSTRAINT "RetunFeedItem_feedName_fkey";

-- DropForeignKey
ALTER TABLE "RetunFeedItem" DROP CONSTRAINT "RetunFeedItem_returnInvoice_fkey";

-- DropForeignKey
ALTER TABLE "feedSalesItem" DROP CONSTRAINT "feedSalesItem_feedName_fkey";

-- AddForeignKey
ALTER TABLE "feedSalesItem" ADD CONSTRAINT "feedSalesItem_feedName_fkey" FOREIGN KEY ("feedName") REFERENCES "feedNameCategory"("feedName") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RetunFeedItem" ADD CONSTRAINT "RetunFeedItem_returnInvoice_fkey" FOREIGN KEY ("returnInvoice") REFERENCES "feedRetun"("returnInvoice") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RetunFeedItem" ADD CONSTRAINT "RetunFeedItem_feedName_fkey" FOREIGN KEY ("feedName") REFERENCES "feedNameCategory"("feedName") ON DELETE CASCADE ON UPDATE CASCADE;
