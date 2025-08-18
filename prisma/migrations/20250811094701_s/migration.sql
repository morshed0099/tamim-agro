/*
  Warnings:

  - A unique constraint covering the columns `[flockId,feedName]` on the table `farmFeedStock` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "farmFeedStock_flockId_feedName_idx";

-- CreateIndex
CREATE UNIQUE INDEX "farmFeedStock_flockId_feedName_key" ON "farmFeedStock"("flockId", "feedName");
