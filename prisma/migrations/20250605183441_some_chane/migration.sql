/*
  Warnings:

  - You are about to drop the column `farmcode` on the `SellMedicine` table. All the data in the column will be lost.
  - You are about to drop the column `farmCode` on the `farmer` table. All the data in the column will be lost.
  - You are about to drop the column `farmCode` on the `flock` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[farmId]` on the table `farmer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `farmId` to the `SellMedicine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `farmId` to the `farmer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `farmId` to the `flock` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SellMedicine" DROP CONSTRAINT "SellMedicine_farmcode_fkey";

-- DropForeignKey
ALTER TABLE "farmer" DROP CONSTRAINT "farmer_addressId_fkey";

-- DropForeignKey
ALTER TABLE "flock" DROP CONSTRAINT "flock_farmCode_fkey";

-- DropIndex
DROP INDEX "farmer_farmCode_key";

-- AlterTable
ALTER TABLE "SellMedicine" DROP COLUMN "farmcode",
ADD COLUMN     "farmId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "farmer" DROP COLUMN "farmCode",
ADD COLUMN     "farmId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "flock" DROP COLUMN "farmCode",
ADD COLUMN     "farmId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "farmer_farmId_key" ON "farmer"("farmId");

-- AddForeignKey
ALTER TABLE "farmer" ADD CONSTRAINT "farmer_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flock" ADD CONSTRAINT "flock_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "farmer"("farmId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SellMedicine" ADD CONSTRAINT "SellMedicine_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "farmer"("farmId") ON DELETE CASCADE ON UPDATE CASCADE;
