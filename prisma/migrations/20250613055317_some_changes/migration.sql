/*
  Warnings:

  - You are about to drop the column `fromBranch` on the `medicineTransfer` table. All the data in the column will be lost.
  - You are about to drop the column `sellId` on the `medicineTransfer` table. All the data in the column will be lost.
  - You are about to drop the column `toBranch` on the `medicineTransfer` table. All the data in the column will be lost.
  - You are about to drop the `medicineNameCategoy` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[billNumber]` on the table `sellMedicine` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `billNumber` to the `medicineTransfer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toFarmcode` to the `medicineTransfer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "medicineNameAdd" DROP CONSTRAINT "medicineNameAdd_genericName_fkey";

-- DropForeignKey
ALTER TABLE "medicinePurchess" DROP CONSTRAINT "medicinePurchess_genericName_fkey";

-- DropForeignKey
ALTER TABLE "medicineStock" DROP CONSTRAINT "medicineStock_genericName_fkey";

-- DropForeignKey
ALTER TABLE "medicineTransfer" DROP CONSTRAINT "medicineTransfer_sellId_fkey";

-- AlterTable
ALTER TABLE "medicineTransfer" DROP COLUMN "fromBranch",
DROP COLUMN "sellId",
DROP COLUMN "toBranch",
ADD COLUMN     "billNumber" INTEGER NOT NULL,
ADD COLUMN     "fromFarmcode" INTEGER,
DROP COLUMN "toFarmcode",
ADD COLUMN     "toFarmcode" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "sellMedicine" ADD COLUMN     "billNumber" SERIAL NOT NULL;

-- DropTable
DROP TABLE "medicineNameCategoy";

-- CreateTable
CREATE TABLE "allGenericMedicin" (
    "id" TEXT NOT NULL,
    "genericName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "allGenericMedicin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "allGenericMedicin_genericName_key" ON "allGenericMedicin"("genericName");

-- CreateIndex
CREATE UNIQUE INDEX "sellMedicine_billNumber_key" ON "sellMedicine"("billNumber");

-- CreateIndex
CREATE INDEX "sellMedicine_billNumber_idx" ON "sellMedicine"("billNumber");

-- AddForeignKey
ALTER TABLE "medicineNameAdd" ADD CONSTRAINT "medicineNameAdd_genericName_fkey" FOREIGN KEY ("genericName") REFERENCES "allGenericMedicin"("genericName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicinePurchess" ADD CONSTRAINT "medicinePurchess_genericName_fkey" FOREIGN KEY ("genericName") REFERENCES "allGenericMedicin"("genericName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicineStock" ADD CONSTRAINT "medicineStock_genericName_fkey" FOREIGN KEY ("genericName") REFERENCES "allGenericMedicin"("genericName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicineTransfer" ADD CONSTRAINT "medicineTransfer_billNumber_fkey" FOREIGN KEY ("billNumber") REFERENCES "sellMedicine"("billNumber") ON DELETE RESTRICT ON UPDATE CASCADE;
