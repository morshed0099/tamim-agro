-- CreateEnum
CREATE TYPE "FlockStatus" AS ENUM ('PENDING', 'RUNNING', 'CLOSED');

-- CreateEnum
CREATE TYPE "Custtype" AS ENUM ('Broiler', 'Color', 'Both');

-- CreateEnum
CREATE TYPE "BranchType" AS ENUM ('HeadOffice', 'BranchOffice', 'BoguraOffice');

-- CreateEnum
CREATE TYPE "Stored" AS ENUM ('FACTORY', 'DEPOT');

-- CreateEnum
CREATE TYPE "DeliveryStatus" AS ENUM ('PENDING', 'DELIVER');

-- CreateTable
CREATE TABLE "branch" (
    "id" TEXT NOT NULL,
    "locationName" TEXT NOT NULL,
    "type" "BranchType" NOT NULL,
    "branchCode" TEXT NOT NULL,
    "createDate" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "branch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "depot" (
    "id" TEXT NOT NULL,
    "locationName" TEXT NOT NULL,
    "depotName" TEXT NOT NULL,
    "createDate" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "depot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "farmer" (
    "id" TEXT NOT NULL,
    "branchCode" TEXT,
    "farmCode" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "farmType" "Custtype" NOT NULL,
    "totalShed" INTEGER NOT NULL,
    "totalSquare" INTEGER NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "addressId" TEXT,
    "nid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createDate" TEXT NOT NULL,

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
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "distic" TEXT NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "branchEmployee" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "branchCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "branchEmployee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "addressId" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createDate" TEXT NOT NULL,
    "nid" TEXT NOT NULL,

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
    "farmId" TEXT NOT NULL,
    "docName" TEXT NOT NULL,
    "docQuantity" INTEGER NOT NULL DEFAULT 0,
    "approvedBy" TEXT,
    "branchCode" TEXT NOT NULL,
    "totalFeedKg" INTEGER NOT NULL DEFAULT 0,
    "totalMedicine" INTEGER NOT NULL DEFAULT 0,
    "fcr" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalSellBirds" INTEGER NOT NULL DEFAULT 0,
    "mortality" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "flock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chicks" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "branchCode" TEXT NOT NULL,
    "farmNumber" INTEGER NOT NULL,
    "farmId" TEXT NOT NULL,
    "flockId" TEXT NOT NULL,
    "currentPrice" INTEGER NOT NULL,
    "sellPrice" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "totalPrice" INTEGER NOT NULL,
    "createdBy" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chicks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "birdSell" (
    "id" TEXT NOT NULL,
    "buyerId" TEXT NOT NULL,
    "totalQantity" INTEGER NOT NULL,
    "totalWeight" DOUBLE PRECISION NOT NULL,
    "avgWeight" DOUBLE PRECISION NOT NULL,
    "pricePerkg" INTEGER NOT NULL,
    "totalPrice" INTEGER NOT NULL,
    "paid" BOOLEAN NOT NULL DEFAULT true,
    "farmId" TEXT NOT NULL,
    "branchCode" TEXT NOT NULL,
    "flockId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "birdSell_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flockReport" (
    "id" TEXT NOT NULL,
    "housedBirds" INTEGER NOT NULL,
    "fcr" DOUBLE PRECISION,
    "executiveId" TEXT NOT NULL,
    "totalMortality" INTEGER,
    "todayMortality" INTEGER NOT NULL,
    "todayMortalityPercent" DOUBLE PRECISION,
    "totalMortalityPercentage" DOUBLE PRECISION,
    "bodyWeight" DOUBLE PRECISION NOT NULL,
    "todayWeightGain" INTEGER NOT NULL,
    "todayFeedEting" INTEGER NOT NULL,
    "suggestTosell" BOOLEAN NOT NULL DEFAULT false,
    "averageBodyWight" DOUBLE PRECISION,
    "totalFeedEting" INTEGER NOT NULL,
    "feedStock" INTEGER NOT NULL,
    "diseases" TEXT NOT NULL,
    "birdsStock" INTEGER NOT NULL,
    "condition" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "executiveName" TEXT NOT NULL,
    "flockNumber" TEXT NOT NULL,
    "age" INTEGER,
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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "flockReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feedNameCategory" (
    "id" TEXT NOT NULL,
    "feedName" TEXT NOT NULL,
    "feedCodeNumber" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createDate" TEXT NOT NULL,

    CONSTRAINT "feedNameCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feedStoc" (
    "id" TEXT NOT NULL,
    "feedName" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "depotName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "branchId" TEXT,
    "createDate" TEXT NOT NULL,

    CONSTRAINT "feedStoc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feedStockTransfer" (
    "id" TEXT NOT NULL,
    "fromDepot" TEXT NOT NULL,
    "toDepot" TEXT NOT NULL,
    "transerFerDate" TEXT NOT NULL,
    "createDate" TEXT NOT NULL,
    "trnasferBill" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "depotId" TEXT,

    CONSTRAINT "feedStockTransfer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transferFeedItem" (
    "id" TEXT NOT NULL,
    "feedName" TEXT NOT NULL,
    "createDate" TEXT NOT NULL,
    "quntity" TEXT NOT NULL,
    "tansferId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transferFeedItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feedSalesOrder" (
    "id" TEXT NOT NULL,
    "branchCode" TEXT NOT NULL,
    "depotName" TEXT NOT NULL,
    "saleInvoice" TEXT NOT NULL,
    "farmNumber" INTEGER NOT NULL,
    "flockNumber" INTEGER NOT NULL,
    "createDate" TEXT NOT NULL,
    "farmId" TEXT NOT NULL,
    "flockId" TEXT NOT NULL,
    "description" TEXT,
    "status" "DeliveryStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "feedSalesOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feedSalesItem" (
    "id" TEXT NOT NULL,
    "feedName" TEXT NOT NULL,
    "salesInvoice" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createDate" TEXT NOT NULL,
    "totalPice" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "feedSalesItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "allGenericMedicin" (
    "id" TEXT NOT NULL,
    "genericName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "allGenericMedicin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medicineNameAdd" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "conpany" TEXT NOT NULL,
    "genericName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

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
    "stored" "Stored" NOT NULL DEFAULT 'FACTORY',
    "branchCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

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
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "medicineStock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medicineItem" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "billNumber" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "medicineItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sellMedicine" (
    "id" TEXT NOT NULL,
    "billNumber" INTEGER NOT NULL,
    "farmId" TEXT NOT NULL,
    "flockNumer" INTEGER NOT NULL,
    "totalQuantity" INTEGER,
    "totalPrice" INTEGER,
    "Delivery" "DeliveryStatus" NOT NULL DEFAULT 'DELIVER',
    "sellDate" TEXT NOT NULL,
    "branchCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sellMedicine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StockTransfer" (
    "id" TEXT NOT NULL,
    "toBranchCode" TEXT NOT NULL,
    "genericName" TEXT NOT NULL,
    "medicineName" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "FromDepotName" TEXT NOT NULL,

    CONSTRAINT "StockTransfer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medicineTransfer" (
    "id" TEXT NOT NULL,
    "billNumber" INTEGER NOT NULL,
    "flockId" TEXT NOT NULL,
    "fromFarmcode" INTEGER,
    "toFarmcode" INTEGER NOT NULL,
    "medicineName" TEXT NOT NULL,
    "genericName" TEXT NOT NULL,
    "branchCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "medicineTransfer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "branch_locationName_key" ON "branch"("locationName");

-- CreateIndex
CREATE UNIQUE INDEX "branch_branchCode_key" ON "branch"("branchCode");

-- CreateIndex
CREATE UNIQUE INDEX "depot_depotName_key" ON "depot"("depotName");

-- CreateIndex
CREATE INDEX "depot_depotName_idx" ON "depot"("depotName");

-- CreateIndex
CREATE UNIQUE INDEX "farmer_addressId_key" ON "farmer"("addressId");

-- CreateIndex
CREATE INDEX "farmer_farmCode_idx" ON "farmer"("farmCode");

-- CreateIndex
CREATE UNIQUE INDEX "farmer_branchCode_farmCode_key" ON "farmer"("branchCode", "farmCode");

-- CreateIndex
CREATE INDEX "branchEmployee_employeeId_idx" ON "branchEmployee"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "employee_employeeId_key" ON "employee"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "employee_addressId_key" ON "employee"("addressId");

-- CreateIndex
CREATE INDEX "employee_employeeId_idx" ON "employee"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "flock_flockNumber_key" ON "flock"("flockNumber");

-- CreateIndex
CREATE UNIQUE INDEX "feedNameCategory_feedName_key" ON "feedNameCategory"("feedName");

-- CreateIndex
CREATE UNIQUE INDEX "feedNameCategory_feedCodeNumber_key" ON "feedNameCategory"("feedCodeNumber");

-- CreateIndex
CREATE UNIQUE INDEX "feedStoc_feedName_depotName_key" ON "feedStoc"("feedName", "depotName");

-- CreateIndex
CREATE UNIQUE INDEX "feedStockTransfer_trnasferBill_key" ON "feedStockTransfer"("trnasferBill");

-- CreateIndex
CREATE INDEX "feedStockTransfer_trnasferBill_idx" ON "feedStockTransfer"("trnasferBill");

-- CreateIndex
CREATE UNIQUE INDEX "feedSalesOrder_saleInvoice_key" ON "feedSalesOrder"("saleInvoice");

-- CreateIndex
CREATE INDEX "feedSalesOrder_saleInvoice_idx" ON "feedSalesOrder"("saleInvoice");

-- CreateIndex
CREATE INDEX "feedSalesItem_salesInvoice_idx" ON "feedSalesItem"("salesInvoice");

-- CreateIndex
CREATE UNIQUE INDEX "allGenericMedicin_genericName_key" ON "allGenericMedicin"("genericName");

-- CreateIndex
CREATE UNIQUE INDEX "medicineNameAdd_name_key" ON "medicineNameAdd"("name");

-- CreateIndex
CREATE UNIQUE INDEX "medicineStock_genericName_medicineName_branchCode_key" ON "medicineStock"("genericName", "medicineName", "branchCode");

-- CreateIndex
CREATE UNIQUE INDEX "sellMedicine_billNumber_key" ON "sellMedicine"("billNumber");

-- CreateIndex
CREATE INDEX "sellMedicine_billNumber_idx" ON "sellMedicine"("billNumber");

-- AddForeignKey
ALTER TABLE "farmer" ADD CONSTRAINT "farmer_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "farmer" ADD CONSTRAINT "farmer_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "branch"("branchCode") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branchEmployee" ADD CONSTRAINT "branchEmployee_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "branch"("branchCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branchEmployee" ADD CONSTRAINT "branchEmployee_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee"("employeeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flock" ADD CONSTRAINT "flock_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "branch"("branchCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flock" ADD CONSTRAINT "flock_executiveId_fkey" FOREIGN KEY ("executiveId") REFERENCES "employee"("employeeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flock" ADD CONSTRAINT "flock_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chicks" ADD CONSTRAINT "chicks_flockId_fkey" FOREIGN KEY ("flockId") REFERENCES "flock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chicks" ADD CONSTRAINT "chicks_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chicks" ADD CONSTRAINT "chicks_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "branch"("branchCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "birdSell" ADD CONSTRAINT "birdSell_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "birdSell" ADD CONSTRAINT "birdSell_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "branch"("branchCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "birdSell" ADD CONSTRAINT "birdSell_flockId_fkey" FOREIGN KEY ("flockId") REFERENCES "flock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flockReport" ADD CONSTRAINT "flockReport_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "branch"("branchCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flockReport" ADD CONSTRAINT "flockReport_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flockReport" ADD CONSTRAINT "flockReport_flockId_fkey" FOREIGN KEY ("flockId") REFERENCES "flock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedStoc" ADD CONSTRAINT "feedStoc_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedStoc" ADD CONSTRAINT "feedStoc_depotName_fkey" FOREIGN KEY ("depotName") REFERENCES "depot"("depotName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedStoc" ADD CONSTRAINT "feedStoc_feedName_fkey" FOREIGN KEY ("feedName") REFERENCES "feedNameCategory"("feedName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedStockTransfer" ADD CONSTRAINT "feedStockTransfer_fromDepot_fkey" FOREIGN KEY ("fromDepot") REFERENCES "depot"("depotName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedStockTransfer" ADD CONSTRAINT "feedStockTransfer_toDepot_fkey" FOREIGN KEY ("toDepot") REFERENCES "depot"("depotName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transferFeedItem" ADD CONSTRAINT "transferFeedItem_feedName_fkey" FOREIGN KEY ("feedName") REFERENCES "feedNameCategory"("feedName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transferFeedItem" ADD CONSTRAINT "transferFeedItem_tansferId_fkey" FOREIGN KEY ("tansferId") REFERENCES "feedStockTransfer"("trnasferBill") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedSalesOrder" ADD CONSTRAINT "feedSalesOrder_depotName_fkey" FOREIGN KEY ("depotName") REFERENCES "depot"("depotName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedSalesItem" ADD CONSTRAINT "feedSalesItem_salesInvoice_fkey" FOREIGN KEY ("salesInvoice") REFERENCES "feedSalesOrder"("saleInvoice") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedSalesItem" ADD CONSTRAINT "feedSalesItem_feedName_fkey" FOREIGN KEY ("feedName") REFERENCES "feedNameCategory"("feedName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicineNameAdd" ADD CONSTRAINT "medicineNameAdd_genericName_fkey" FOREIGN KEY ("genericName") REFERENCES "allGenericMedicin"("genericName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicinePurchess" ADD CONSTRAINT "medicinePurchess_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "branch"("branchCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicinePurchess" ADD CONSTRAINT "medicinePurchess_genericName_fkey" FOREIGN KEY ("genericName") REFERENCES "allGenericMedicin"("genericName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicinePurchess" ADD CONSTRAINT "medicinePurchess_name_fkey" FOREIGN KEY ("name") REFERENCES "medicineNameAdd"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicineStock" ADD CONSTRAINT "medicineStock_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "branch"("branchCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicineStock" ADD CONSTRAINT "medicineStock_genericName_fkey" FOREIGN KEY ("genericName") REFERENCES "allGenericMedicin"("genericName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicineStock" ADD CONSTRAINT "medicineStock_medicineName_fkey" FOREIGN KEY ("medicineName") REFERENCES "medicineNameAdd"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicineItem" ADD CONSTRAINT "medicineItem_billNumber_fkey" FOREIGN KEY ("billNumber") REFERENCES "sellMedicine"("billNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sellMedicine" ADD CONSTRAINT "sellMedicine_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "branch"("branchCode") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sellMedicine" ADD CONSTRAINT "sellMedicine_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "farmer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sellMedicine" ADD CONSTRAINT "sellMedicine_flockNumer_fkey" FOREIGN KEY ("flockNumer") REFERENCES "flock"("flockNumber") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicineTransfer" ADD CONSTRAINT "medicineTransfer_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "branch"("branchCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicineTransfer" ADD CONSTRAINT "medicineTransfer_flockId_fkey" FOREIGN KEY ("flockId") REFERENCES "flock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
