-- CreateEnum
CREATE TYPE "FlockStatus" AS ENUM ('PENDING', 'RUNNING', 'CLOSED');

-- CreateEnum
CREATE TYPE "Custtype" AS ENUM ('Broiler', 'Color');

-- CreateEnum
CREATE TYPE "BranchType" AS ENUM ('HeadOffice', 'BranchOffice', 'BoguraOffice');

-- CreateEnum
CREATE TYPE "DeliveryStatus" AS ENUM ('RETURN', 'TRANSFER', 'DELIVER');

-- CreateTable
CREATE TABLE "branch" (
    "id" TEXT NOT NULL,
    "locationName" TEXT NOT NULL,
    "type" "BranchType" NOT NULL,
    "branchCode" TEXT NOT NULL,

    CONSTRAINT "branch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "farmer" (
    "id" TEXT NOT NULL,
    "branchCode" TEXT NOT NULL,
    "farmCode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "farmType" "Custtype" NOT NULL,
    "totalShed" INTEGER NOT NULL,
    "totalSquare" INTEGER NOT NULL,
    "capacity" INTEGER NOT NULL,
    "addressId" TEXT NOT NULL,
    "nid" TEXT NOT NULL,

    CONSTRAINT "farmer_pkey" PRIMARY KEY ("id")
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
    "branchId" TEXT NOT NULL,
    "addressId" TEXT,

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

-- CreateTable
CREATE TABLE "SellMedicine" (
    "id" TEXT NOT NULL,
    "farmcode" TEXT NOT NULL,
    "flockNumer" INTEGER NOT NULL,
    "genericName" TEXT NOT NULL,
    "medicineName" TEXT NOT NULL,
    "sellQuantity" INTEGER NOT NULL,
    "sellPrice" INTEGER NOT NULL,
    "Delivery" "DeliveryStatus" NOT NULL DEFAULT 'DELIVER',
    "sellDate" TEXT NOT NULL,
    "branchCode" TEXT NOT NULL,

    CONSTRAINT "SellMedicine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicineTransfer" (
    "id" TEXT NOT NULL,
    "sellId" TEXT NOT NULL,
    "flockId" TEXT NOT NULL,
    "toFarmcode" TEXT,
    "fromBranch" TEXT,
    "toBranch" TEXT,
    "medicineName" TEXT NOT NULL,
    "genericName" TEXT NOT NULL,
    "branchCode" TEXT NOT NULL,

    CONSTRAINT "MedicineTransfer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "branch_locationName_key" ON "branch"("locationName");

-- CreateIndex
CREATE UNIQUE INDEX "branch_branchCode_key" ON "branch"("branchCode");

-- CreateIndex
CREATE UNIQUE INDEX "farmer_farmCode_key" ON "farmer"("farmCode");

-- CreateIndex
CREATE UNIQUE INDEX "farmer_addressId_key" ON "farmer"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "address_employeeId_key" ON "address"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "address_farmCode_key" ON "address"("farmCode");

-- CreateIndex
CREATE UNIQUE INDEX "employee_employeeId_key" ON "employee"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "employee_addressId_key" ON "employee"("addressId");

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

-- CreateIndex
CREATE UNIQUE INDEX "medicineStock_genericName_key" ON "medicineStock"("genericName");

-- CreateIndex
CREATE UNIQUE INDEX "medicineStock_medicineName_key" ON "medicineStock"("medicineName");

-- CreateIndex
CREATE UNIQUE INDEX "medicineStock_genericName_medicineName_key" ON "medicineStock"("genericName", "medicineName");

-- AddForeignKey
ALTER TABLE "farmer" ADD CONSTRAINT "farmer_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "branch"("branchCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "farmer" ADD CONSTRAINT "farmer_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("farmCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branchEmployee" ADD CONSTRAINT "branchEmployee_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "branch"("branchCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branchEmployee" ADD CONSTRAINT "branchEmployee_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee"("employeeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("employeeId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flock" ADD CONSTRAINT "flock_farmCode_fkey" FOREIGN KEY ("farmCode") REFERENCES "farmer"("farmCode") ON DELETE RESTRICT ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE "SellMedicine" ADD CONSTRAINT "SellMedicine_flockNumer_fkey" FOREIGN KEY ("flockNumer") REFERENCES "flock"("flockNumber") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SellMedicine" ADD CONSTRAINT "SellMedicine_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "branch"("branchCode") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SellMedicine" ADD CONSTRAINT "SellMedicine_farmcode_fkey" FOREIGN KEY ("farmcode") REFERENCES "farmer"("farmCode") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicineTransfer" ADD CONSTRAINT "MedicineTransfer_sellId_fkey" FOREIGN KEY ("sellId") REFERENCES "SellMedicine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicineTransfer" ADD CONSTRAINT "MedicineTransfer_flockId_fkey" FOREIGN KEY ("flockId") REFERENCES "flock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicineTransfer" ADD CONSTRAINT "MedicineTransfer_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "branch"("branchCode") ON DELETE RESTRICT ON UPDATE CASCADE;
