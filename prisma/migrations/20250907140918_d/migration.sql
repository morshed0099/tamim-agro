/*
  Warnings:

  - A unique constraint covering the columns `[depotName,feedName,createAt]` on the table `feedStockHistory` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "feedStockHistory_depotName_feedName_key";

-- CreateIndex
CREATE UNIQUE INDEX "feedStockHistory_depotName_feedName_createAt_key" ON "feedStockHistory"("depotName", "feedName", "createAt");
