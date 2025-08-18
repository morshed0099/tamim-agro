-- AddForeignKey
ALTER TABLE "farmFeedStock" ADD CONSTRAINT "farmFeedStock_flockId_fkey" FOREIGN KEY ("flockId") REFERENCES "flock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
