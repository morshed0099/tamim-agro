/*
  Warnings:

  - You are about to drop the column `emplyeId` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `Farmtype` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `brancCode` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `totalSqure` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `branceCode` on the `Flock` table. All the data in the column will be lost.
  - You are about to drop the column `executive` on the `Flock` table. All the data in the column will be lost.
  - You are about to drop the column `totalmedicine` on the `Flock` table. All the data in the column will be lost.
  - You are about to drop the column `totalsellBirds` on the `Flock` table. All the data in the column will be lost.
  - You are about to drop the column `brancCode` on the `Medicine` table. All the data in the column will be lost.
  - You are about to drop the column `genericname` on the `Medicine` table. All the data in the column will be lost.
  - You are about to drop the column `sotck` on the `Medicine` table. All the data in the column will be lost.
  - You are about to drop the `Brance` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BranceWithEmplyee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Emplyee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MedecinePurchess` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MedicineNameCateogry` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[employeeId]` on the table `Address` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `branchCode` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `farmType` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalSquare` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `branchCode` to the `Flock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `executiveId` to the `Flock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `branchCode` to the `Medicine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genericName` to the `Medicine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stock` to the `Medicine` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BranchType" AS ENUM ('HeadOffice', 'BranchOffice', 'BoguraOffice');

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_emplyeId_fkey";

-- DropForeignKey
ALTER TABLE "BranceWithEmplyee" DROP CONSTRAINT "BranceWithEmplyee_branceCode_fkey";

-- DropForeignKey
ALTER TABLE "BranceWithEmplyee" DROP CONSTRAINT "BranceWithEmplyee_emplyeeId_fkey";

-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_brancCode_fkey";

-- DropForeignKey
ALTER TABLE "Emplyee" DROP CONSTRAINT "Emplyee_branceId_fkey";

-- DropForeignKey
ALTER TABLE "Flock" DROP CONSTRAINT "Flock_branceCode_fkey";

-- DropForeignKey
ALTER TABLE "Flock" DROP CONSTRAINT "Flock_executive_fkey";

-- DropForeignKey
ALTER TABLE "MedecinePurchess" DROP CONSTRAINT "MedecinePurchess_branceCode_fkey";

-- DropForeignKey
ALTER TABLE "MedecinePurchess" DROP CONSTRAINT "MedecinePurchess_genericName_fkey";

-- DropForeignKey
ALTER TABLE "Medicine" DROP CONSTRAINT "Medicine_brancCode_fkey";

-- DropForeignKey
ALTER TABLE "Medicine" DROP CONSTRAINT "Medicine_genericname_fkey";

-- DropIndex
DROP INDEX "Address_emplyeId_key";

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "emplyeId",
ADD COLUMN     "employeeId" TEXT;

-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "Farmtype",
DROP COLUMN "brancCode",
DROP COLUMN "totalSqure",
ADD COLUMN     "branchCode" TEXT NOT NULL,
ADD COLUMN     "farmType" "Custtype" NOT NULL,
ADD COLUMN     "totalSquare" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Feed" ADD COLUMN     "branchCode" TEXT;

-- AlterTable
ALTER TABLE "Flock" DROP COLUMN "branceCode",
DROP COLUMN "executive",
DROP COLUMN "totalmedicine",
DROP COLUMN "totalsellBirds",
ADD COLUMN     "branchCode" TEXT NOT NULL,
ADD COLUMN     "executiveId" TEXT NOT NULL,
ADD COLUMN     "totalMedicine" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "totalSellBirds" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "flockNumber" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Medicine" DROP COLUMN "brancCode",
DROP COLUMN "genericname",
DROP COLUMN "sotck",
ADD COLUMN     "branchCode" TEXT NOT NULL,
ADD COLUMN     "genericName" TEXT NOT NULL,
ADD COLUMN     "stock" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Brance";

-- DropTable
DROP TABLE "BranceWithEmplyee";

-- DropTable
DROP TABLE "Emplyee";

-- DropTable
DROP TABLE "MedecinePurchess";

-- DropTable
DROP TABLE "MedicineNameCateogry";

-- DropEnum
DROP TYPE "BranceType";

-- CreateTable
CREATE TABLE "Branch" (
    "id" TEXT NOT NULL,
    "locationName" TEXT NOT NULL,
    "type" "BranchType" NOT NULL,
    "branchCode" TEXT NOT NULL,

    CONSTRAINT "Branch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BranchEmployee" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "branchCode" TEXT NOT NULL,

    CONSTRAINT "BranchEmployee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "workingLocation" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "branchId" TEXT,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicineNameCategory" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "genericName" TEXT NOT NULL,

    CONSTRAINT "MedicineNameCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicinePurchase" (
    "id" TEXT NOT NULL,
    "genericName" TEXT NOT NULL,
    "purchaseUnitPrice" INTEGER NOT NULL,
    "sellUnitPrice" INTEGER NOT NULL,
    "purchaseQuantity" INTEGER NOT NULL,
    "mfgDate" TEXT NOT NULL,
    "expDate" TEXT NOT NULL,
    "bonusQuantity" INTEGER,
    "purchaseTotalPrice" INTEGER NOT NULL,
    "supplierInfo" TEXT NOT NULL,
    "totalStock" INTEGER NOT NULL,
    "branchCode" TEXT NOT NULL,

    CONSTRAINT "MedicinePurchase_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Branch_locationName_key" ON "Branch"("locationName");

-- CreateIndex
CREATE UNIQUE INDEX "Branch_branchCode_key" ON "Branch"("branchCode");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_employeeId_key" ON "Employee"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "MedicineNameCategory_genericName_key" ON "MedicineNameCategory"("genericName");

-- CreateIndex
CREATE UNIQUE INDEX "Address_employeeId_key" ON "Address"("employeeId");

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "Branch"("branchCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("employeeId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BranchEmployee" ADD CONSTRAINT "BranchEmployee_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "Branch"("branchCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BranchEmployee" ADD CONSTRAINT "BranchEmployee_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("employeeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branch"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flock" ADD CONSTRAINT "Flock_executiveId_fkey" FOREIGN KEY ("executiveId") REFERENCES "Employee"("employeeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flock" ADD CONSTRAINT "Flock_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "Branch"("branchCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feed" ADD CONSTRAINT "Feed_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "Branch"("branchCode") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicinePurchase" ADD CONSTRAINT "MedicinePurchase_genericName_fkey" FOREIGN KEY ("genericName") REFERENCES "MedicineNameCategory"("genericName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicinePurchase" ADD CONSTRAINT "MedicinePurchase_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "Branch"("branchCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medicine" ADD CONSTRAINT "Medicine_genericName_fkey" FOREIGN KEY ("genericName") REFERENCES "MedicineNameCategory"("genericName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medicine" ADD CONSTRAINT "Medicine_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "Branch"("branchCode") ON DELETE RESTRICT ON UPDATE CASCADE;
