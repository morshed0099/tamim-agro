/*
  Warnings:

  - You are about to drop the column `flockNumer` on the `sellMedicine` table. All the data in the column will be lost.
  - Added the required column `flockId` to the `sellMedicine` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "sellMedicine" DROP CONSTRAINT "sellMedicine_flockNumer_fkey";

-- DropIndex
DROP INDEX "flock_flockNumber_key";

-- AlterTable
ALTER TABLE "sellMedicine" DROP COLUMN "flockNumer",
ADD COLUMN     "flockId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "flock_flockNumber_idx" ON "flock"("flockNumber");

-- AddForeignKey
ALTER TABLE "sellMedicine" ADD CONSTRAINT "sellMedicine_flockId_fkey" FOREIGN KEY ("flockId") REFERENCES "flock"("id") ON DELETE CASCADE ON UPDATE CASCADE;
