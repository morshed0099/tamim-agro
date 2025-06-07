/*
  Warnings:

  - You are about to drop the `FlockReport` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MedicineTransfer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SellMedicine` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `createdAt` to the `feed` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `feedNameCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `medicineNameAdd` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `medicineNameCategoy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `medicinePurchess` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `medicineStock` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FlockReport" DROP CONSTRAINT "FlockReport_branchCode_fkey";

-- DropForeignKey
ALTER TABLE "FlockReport" DROP CONSTRAINT "FlockReport_farmId_fkey";

-- DropForeignKey
ALTER TABLE "FlockReport" DROP CONSTRAINT "FlockReport_flockId_fkey";

-- DropForeignKey
ALTER TABLE "MedicineTransfer" DROP CONSTRAINT "MedicineTransfer_branchCode_fkey";

-- DropForeignKey
ALTER TABLE "MedicineTransfer" DROP CONSTRAINT "MedicineTransfer_flockId_fkey";

-- DropForeignKey
ALTER TABLE "MedicineTransfer" DROP CONSTRAINT "MedicineTransfer_sellId_fkey";

-- DropForeignKey
ALTER TABLE "SellMedicine" DROP CONSTRAINT "SellMedicine_branchCode_fkey";

-- DropForeignKey
ALTER TABLE "SellMedicine" DROP CONSTRAINT "SellMedicine_farmId_fkey";

-- DropForeignKey
ALTER TABLE "SellMedicine" DROP CONSTRAINT "SellMedicine_flockNumer_fkey";

-- AlterTable
ALTER TABLE "branchEmployee" ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "feed" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "feedNameCategory" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "medicineNameAdd" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "medicineNameCategoy" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "medicinePurchess" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "medicineStock" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "FlockReport";

-- DropTable
DROP TABLE "MedicineTransfer";

-- DropTable
DROP TABLE "SellMedicine";

-- CreateTable
CREATE TABLE "flockReport" (
    "id" TEXT NOT NULL,
    "fcr" DOUBLE PRECISION NOT NULL,
    "executiveId" TEXT NOT NULL,
    "totalMortality" INTEGER NOT NULL,
    "todayMortality" INTEGER NOT NULL,
    "todayMortalityPercent" DOUBLE PRECISION NOT NULL,
    "totalMortalityPercentage" DOUBLE PRECISION NOT NULL,
    "bodyWeight" DOUBLE PRECISION NOT NULL,
    "todayWeightGain" INTEGER NOT NULL,
    "feedStock" INTEGER NOT NULL,
    "diseases" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "executiveName" TEXT NOT NULL,
    "flockNumber" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "imagesOne" TEXT,
    "imageTwo" TEXT,
    "imageThree" TEXT,
    "visitedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "locationLink" TEXT NOT NULL,
    "farmId" TEXT NOT NULL,
    "flockId" TEXT NOT NULL,
    "birdsSalesStart" BOOLEAN NOT NULL DEFAULT false,
    "birdsSalesEnd" BOOLEAN NOT NULL DEFAULT false,
    "branchCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "flockReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sellMedicine" (
    "id" TEXT NOT NULL,
    "farmId" TEXT NOT NULL,
    "flockNumer" INTEGER NOT NULL,
    "genericName" TEXT NOT NULL,
    "medicineName" TEXT NOT NULL,
    "sellQuantity" INTEGER NOT NULL,
    "sellPrice" INTEGER NOT NULL,
    "Delivery" "DeliveryStatus" NOT NULL DEFAULT 'DELIVER',
    "sellDate" TEXT NOT NULL,
    "branchCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sellMedicine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medicineTransfer" (
    "id" TEXT NOT NULL,
    "sellId" TEXT NOT NULL,
    "flockId" TEXT NOT NULL,
    "toFarmcode" TEXT,
    "fromBranch" TEXT,
    "toBranch" TEXT,
    "medicineName" TEXT NOT NULL,
    "genericName" TEXT NOT NULL,
    "branchCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "medicineTransfer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "flockReport" ADD CONSTRAINT "flockReport_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "branch"("branchCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flockReport" ADD CONSTRAINT "flockReport_flockId_fkey" FOREIGN KEY ("flockId") REFERENCES "flock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flockReport" ADD CONSTRAINT "flockReport_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sellMedicine" ADD CONSTRAINT "sellMedicine_flockNumer_fkey" FOREIGN KEY ("flockNumer") REFERENCES "flock"("flockNumber") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sellMedicine" ADD CONSTRAINT "sellMedicine_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "branch"("branchCode") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sellMedicine" ADD CONSTRAINT "sellMedicine_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "farmer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicineTransfer" ADD CONSTRAINT "medicineTransfer_sellId_fkey" FOREIGN KEY ("sellId") REFERENCES "sellMedicine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicineTransfer" ADD CONSTRAINT "medicineTransfer_flockId_fkey" FOREIGN KEY ("flockId") REFERENCES "flock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicineTransfer" ADD CONSTRAINT "medicineTransfer_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "branch"("branchCode") ON DELETE RESTRICT ON UPDATE CASCADE;
