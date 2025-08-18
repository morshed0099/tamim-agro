-- DropForeignKey
ALTER TABLE "feedSalesItem" DROP CONSTRAINT "feedSalesItem_salesInvoice_fkey";

-- AddForeignKey
ALTER TABLE "feedSalesItem" ADD CONSTRAINT "feedSalesItem_salesInvoice_fkey" FOREIGN KEY ("salesInvoice") REFERENCES "feedSalesOrder"("saleInvoice") ON DELETE CASCADE ON UPDATE CASCADE;
