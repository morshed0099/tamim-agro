/*
  Warnings:

  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Branch` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BranchEmployee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Employee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Feed` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FeedNameCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Flock` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Medicine` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MedicineNameCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MedicinePurchase` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_farmCode_fkey";

-- DropForeignKey
ALTER TABLE "BranchEmployee" DROP CONSTRAINT "BranchEmployee_branchCode_fkey";

-- DropForeignKey
ALTER TABLE "BranchEmployee" DROP CONSTRAINT "BranchEmployee_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_branchCode_fkey";

-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_branchId_fkey";

-- DropForeignKey
ALTER TABLE "Feed" DROP CONSTRAINT "Feed_branchCode_fkey";

-- DropForeignKey
ALTER TABLE "Feed" DROP CONSTRAINT "Feed_feedName_fkey";

-- DropForeignKey
ALTER TABLE "Flock" DROP CONSTRAINT "Flock_branchCode_fkey";

-- DropForeignKey
ALTER TABLE "Flock" DROP CONSTRAINT "Flock_executiveId_fkey";

-- DropForeignKey
ALTER TABLE "Flock" DROP CONSTRAINT "Flock_farmCode_fkey";

-- DropForeignKey
ALTER TABLE "Medicine" DROP CONSTRAINT "Medicine_branchCode_fkey";

-- DropForeignKey
ALTER TABLE "Medicine" DROP CONSTRAINT "Medicine_genericName_fkey";

-- DropForeignKey
ALTER TABLE "MedicinePurchase" DROP CONSTRAINT "MedicinePurchase_branchCode_fkey";

-- DropForeignKey
ALTER TABLE "MedicinePurchase" DROP CONSTRAINT "MedicinePurchase_genericName_fkey";

-- DropTable
DROP TABLE "Address";

-- DropTable
DROP TABLE "Branch";

-- DropTable
DROP TABLE "BranchEmployee";

-- DropTable
DROP TABLE "Customer";

-- DropTable
DROP TABLE "Employee";

-- DropTable
DROP TABLE "Feed";

-- DropTable
DROP TABLE "FeedNameCategory";

-- DropTable
DROP TABLE "Flock";

-- DropTable
DROP TABLE "Medicine";

-- DropTable
DROP TABLE "MedicineNameCategory";

-- DropTable
DROP TABLE "MedicinePurchase";

-- CreateTable
CREATE TABLE "branch" (
    "id" TEXT NOT NULL,
    "locationName" TEXT NOT NULL,
    "type" "BranchType" NOT NULL,
    "branchCode" TEXT NOT NULL,

    CONSTRAINT "branch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customer" (
    "id" TEXT NOT NULL,
    "branchCode" TEXT NOT NULL,
    "farmCode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "farmType" "Custtype" NOT NULL,
    "totalShed" INTEGER NOT NULL,
    "totalSquare" INTEGER NOT NULL,
    "capacity" INTEGER NOT NULL,
    "nid" TEXT NOT NULL,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" TEXT NOT NULL,
    "village" TEXT NOT NULL,
    "post" TEXT NOT NULL,
    "union" TEXT,
    "thana" TEXT,
    "upazila" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "employeeId" TEXT,
    "farmCode" TEXT,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "branchEmployee" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "branchCode" TEXT NOT NULL,

    CONSTRAINT "branchEmployee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "workingLocation" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "branchId" TEXT,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flock" (
    "id" TEXT NOT NULL,
    "flockNumber" INTEGER NOT NULL,
    "flockStatus" "FlockStatus" NOT NULL DEFAULT 'PENDING',
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "executiveId" TEXT NOT NULL,
    "farmCode" TEXT NOT NULL,
    "docName" TEXT NOT NULL,
    "docQuantity" INTEGER NOT NULL DEFAULT 0,
    "approvedBy" TEXT,
    "branchCode" TEXT NOT NULL,
    "totalFeedKg" INTEGER NOT NULL DEFAULT 0,
    "totalMedicine" INTEGER NOT NULL DEFAULT 0,
    "fcr" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalSellBirds" INTEGER NOT NULL DEFAULT 0,
    "mortality" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "flock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feedNameCategory" (
    "id" TEXT NOT NULL,
    "feedName" TEXT NOT NULL,
    "feedCodeNumber" INTEGER NOT NULL,

    CONSTRAINT "feedNameCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feed" (
    "id" TEXT NOT NULL,
    "feedName" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "branchCode" TEXT,

    CONSTRAINT "feed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medicineNameCategoy" (
    "id" TEXT NOT NULL,
    "genericName" TEXT NOT NULL,

    CONSTRAINT "medicineNameCategoy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medicineNameAdd" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "conpany" TEXT NOT NULL,
    "genericName" TEXT NOT NULL,

    CONSTRAINT "medicineNameAdd_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medicinePurchess" (
    "id" TEXT NOT NULL,
    "genericName" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "purchaseUnitPrice" INTEGER NOT NULL,
    "sellUnitPrice" INTEGER NOT NULL,
    "purchaseQuantity" INTEGER NOT NULL,
    "mfgDate" TEXT NOT NULL,
    "expDate" TEXT NOT NULL,
    "bonusQuantity" INTEGER,
    "purchaseTotalPrice" INTEGER NOT NULL,
    "supplierInfo" TEXT NOT NULL,
    "branchCode" TEXT NOT NULL,

    CONSTRAINT "medicinePurchess_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medicineStock" (
    "id" TEXT NOT NULL,
    "genericName" TEXT NOT NULL,
    "medicineName" TEXT NOT NULL,
    "branchCode" TEXT NOT NULL,
    "totalStock" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "medicineStock_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "branch_locationName_key" ON "branch"("locationName");

-- CreateIndex
CREATE UNIQUE INDEX "branch_branchCode_key" ON "branch"("branchCode");

-- CreateIndex
CREATE UNIQUE INDEX "customer_farmCode_key" ON "customer"("farmCode");

-- CreateIndex
CREATE UNIQUE INDEX "address_employeeId_key" ON "address"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "address_farmCode_key" ON "address"("farmCode");

-- CreateIndex
CREATE UNIQUE INDEX "employee_employeeId_key" ON "employee"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "flock_flockNumber_key" ON "flock"("flockNumber");

-- CreateIndex
CREATE UNIQUE INDEX "feedNameCategory_feedName_key" ON "feedNameCategory"("feedName");

-- CreateIndex
CREATE UNIQUE INDEX "feedNameCategory_feedCodeNumber_key" ON "feedNameCategory"("feedCodeNumber");

-- CreateIndex
CREATE UNIQUE INDEX "medicineNameCategoy_genericName_key" ON "medicineNameCategoy"("genericName");

-- CreateIndex
CREATE UNIQUE INDEX "medicineNameAdd_name_key" ON "medicineNameAdd"("name");

-- AddForeignKey
ALTER TABLE "customer" ADD CONSTRAINT "customer_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "branch"("branchCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee"("employeeId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_farmCode_fkey" FOREIGN KEY ("farmCode") REFERENCES "customer"("farmCode") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branchEmployee" ADD CONSTRAINT "branchEmployee_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "branch"("branchCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branchEmployee" ADD CONSTRAINT "branchEmployee_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee"("employeeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flock" ADD CONSTRAINT "flock_farmCode_fkey" FOREIGN KEY ("farmCode") REFERENCES "customer"("farmCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flock" ADD CONSTRAINT "flock_executiveId_fkey" FOREIGN KEY ("executiveId") REFERENCES "employee"("employeeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flock" ADD CONSTRAINT "flock_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "branch"("branchCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feed" ADD CONSTRAINT "feed_feedName_fkey" FOREIGN KEY ("feedName") REFERENCES "feedNameCategory"("feedName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feed" ADD CONSTRAINT "feed_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "branch"("branchCode") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicineNameAdd" ADD CONSTRAINT "medicineNameAdd_genericName_fkey" FOREIGN KEY ("genericName") REFERENCES "medicineNameCategoy"("genericName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicinePurchess" ADD CONSTRAINT "medicinePurchess_genericName_fkey" FOREIGN KEY ("genericName") REFERENCES "medicineNameCategoy"("genericName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicinePurchess" ADD CONSTRAINT "medicinePurchess_name_fkey" FOREIGN KEY ("name") REFERENCES "medicineNameAdd"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicinePurchess" ADD CONSTRAINT "medicinePurchess_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "branch"("branchCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicineStock" ADD CONSTRAINT "medicineStock_medicineName_fkey" FOREIGN KEY ("medicineName") REFERENCES "medicineNameAdd"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicineStock" ADD CONSTRAINT "medicineStock_genericName_fkey" FOREIGN KEY ("genericName") REFERENCES "medicineNameCategoy"("genericName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicineStock" ADD CONSTRAINT "medicineStock_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "branch"("branchCode") ON DELETE RESTRICT ON UPDATE CASCADE;
