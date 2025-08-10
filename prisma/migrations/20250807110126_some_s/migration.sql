/*
  Warnings:

  - A unique constraint covering the columns `[feedName,depotName]` on the table `feedStoc` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "feedStoc_feedName_depotName_key" ON "feedStoc"("feedName", "depotName");
