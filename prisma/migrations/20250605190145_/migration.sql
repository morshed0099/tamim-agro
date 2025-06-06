/*
  Warnings:

  - You are about to drop the column `farmId` on the `farmer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[farmCode]` on the table `farmer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[branchCode,farmCode]` on the table `farmer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `farmCode` to the `farmer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SellMedicine" DROP CONSTRAINT "SellMedicine_farmId_fkey";

-- DropForeignKey
ALTER TABLE "flock" DROP CONSTRAINT "flock_farmId_fkey";

-- DropIndex
DROP INDEX "farmer_farmId_key";

-- AlterTable
ALTER TABLE "farmer" DROP COLUMN "farmId",
ADD COLUMN     "farmCode" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "farmer_farmCode_key" ON "farmer"("farmCode");

-- CreateIndex
CREATE UNIQUE INDEX "farmer_branchCode_farmCode_key" ON "farmer"("branchCode", "farmCode");

-- AddForeignKey
ALTER TABLE "flock" ADD CONSTRAINT "flock_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SellMedicine" ADD CONSTRAINT "SellMedicine_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "farmer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
