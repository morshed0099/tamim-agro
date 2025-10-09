-- DropForeignKey
ALTER TABLE "AddStockItem" DROP CONSTRAINT "AddStockItem_addStockId_fkey";

-- AddForeignKey
ALTER TABLE "AddStockItem" ADD CONSTRAINT "AddStockItem_addStockId_fkey" FOREIGN KEY ("addStockId") REFERENCES "addStock"("id") ON DELETE CASCADE ON UPDATE CASCADE;
