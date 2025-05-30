-- CreateEnum
CREATE TYPE "FlockStatus" AS ENUM ('PENDING', 'RUNNING', 'CLOSED');

-- CreateEnum
CREATE TYPE "Custtype" AS ENUM ('Broiler', 'Color');

-- CreateEnum
CREATE TYPE "BranceType" AS ENUM ('HeadOffice', 'BranceOffice', 'BoguraOffice');

-- CreateTable
CREATE TABLE "Brance" (
    "id" TEXT NOT NULL,
    "locationName" TEXT NOT NULL,
    "type" "BranceType" NOT NULL,
    "branceCode" TEXT NOT NULL,

    CONSTRAINT "Brance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "brancCode" TEXT NOT NULL,
    "farmCode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "Farmtype" "Custtype" NOT NULL,
    "totalShed" INTEGER NOT NULL,
    "totalSqure" INTEGER NOT NULL,
    "capacity" INTEGER NOT NULL,
    "nid" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "village" TEXT NOT NULL,
    "post" TEXT NOT NULL,
    "union" TEXT,
    "thana" TEXT,
    "upazila" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "emplyeId" TEXT,
    "farmCode" TEXT,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BranceWithEmplyee" (
    "id" TEXT NOT NULL,
    "emplyeeId" TEXT NOT NULL,
    "branceCode" TEXT NOT NULL,

    CONSTRAINT "BranceWithEmplyee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Emplyee" (
    "id" TEXT NOT NULL,
    "emplyeeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "workingLocation" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "branceId" TEXT,

    CONSTRAINT "Emplyee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flock" (
    "id" TEXT NOT NULL,
    "flockNumber" INTEGER NOT NULL DEFAULT 1,
    "flockStatus" "FlockStatus" NOT NULL DEFAULT 'PENDING',
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "executive" TEXT NOT NULL,
    "farmCode" TEXT NOT NULL,
    "docName" TEXT NOT NULL,
    "docQuantity" INTEGER NOT NULL DEFAULT 0,
    "approvedBy" TEXT,
    "branceCode" TEXT NOT NULL,
    "totalFeedKg" INTEGER NOT NULL DEFAULT 0,
    "totalmedicine" INTEGER NOT NULL DEFAULT 0,
    "fcr" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalsellBirds" INTEGER NOT NULL DEFAULT 0,
    "mortality" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Flock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeedNameCategory" (
    "id" TEXT NOT NULL,
    "feedName" TEXT NOT NULL,
    "feedCodeNumber" INTEGER NOT NULL,

    CONSTRAINT "FeedNameCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feed" (
    "id" TEXT NOT NULL,
    "feedName" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,

    CONSTRAINT "Feed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicineNameCateogry" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "genericName" TEXT NOT NULL,

    CONSTRAINT "MedicineNameCateogry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedecinePurchess" (
    "id" TEXT NOT NULL,
    "genericName" TEXT NOT NULL,
    "purchessUnitPrice" INTEGER NOT NULL,
    "sellUnitPrice" INTEGER NOT NULL,
    "purchessQuantity" INTEGER NOT NULL,
    "mfgDate" TEXT NOT NULL,
    "expDate" TEXT NOT NULL,
    "bonusQuantity" INTEGER,
    "purchessTotalPrice" INTEGER NOT NULL,
    "suplyrInfo" TEXT NOT NULL,
    "totalStock" INTEGER NOT NULL,
    "branceCode" TEXT NOT NULL,

    CONSTRAINT "MedecinePurchess_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medicine" (
    "id" TEXT NOT NULL,
    "genericname" TEXT NOT NULL,
    "brancCode" TEXT NOT NULL,
    "sotck" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Medicine_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Brance_locationName_key" ON "Brance"("locationName");

-- CreateIndex
CREATE UNIQUE INDEX "Brance_branceCode_key" ON "Brance"("branceCode");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_farmCode_key" ON "Customer"("farmCode");

-- CreateIndex
CREATE UNIQUE INDEX "Address_emplyeId_key" ON "Address"("emplyeId");

-- CreateIndex
CREATE UNIQUE INDEX "Address_farmCode_key" ON "Address"("farmCode");

-- CreateIndex
CREATE UNIQUE INDEX "Emplyee_emplyeeId_key" ON "Emplyee"("emplyeeId");

-- CreateIndex
CREATE UNIQUE INDEX "Flock_flockNumber_key" ON "Flock"("flockNumber");

-- CreateIndex
CREATE UNIQUE INDEX "FeedNameCategory_feedName_key" ON "FeedNameCategory"("feedName");

-- CreateIndex
CREATE UNIQUE INDEX "FeedNameCategory_feedCodeNumber_key" ON "FeedNameCategory"("feedCodeNumber");

-- CreateIndex
CREATE UNIQUE INDEX "MedicineNameCateogry_genericName_key" ON "MedicineNameCateogry"("genericName");

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_brancCode_fkey" FOREIGN KEY ("brancCode") REFERENCES "Brance"("branceCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_emplyeId_fkey" FOREIGN KEY ("emplyeId") REFERENCES "Emplyee"("emplyeeId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_farmCode_fkey" FOREIGN KEY ("farmCode") REFERENCES "Customer"("farmCode") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BranceWithEmplyee" ADD CONSTRAINT "BranceWithEmplyee_branceCode_fkey" FOREIGN KEY ("branceCode") REFERENCES "Brance"("branceCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BranceWithEmplyee" ADD CONSTRAINT "BranceWithEmplyee_emplyeeId_fkey" FOREIGN KEY ("emplyeeId") REFERENCES "Emplyee"("emplyeeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Emplyee" ADD CONSTRAINT "Emplyee_branceId_fkey" FOREIGN KEY ("branceId") REFERENCES "Brance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flock" ADD CONSTRAINT "Flock_farmCode_fkey" FOREIGN KEY ("farmCode") REFERENCES "Customer"("farmCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flock" ADD CONSTRAINT "Flock_executive_fkey" FOREIGN KEY ("executive") REFERENCES "Emplyee"("emplyeeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flock" ADD CONSTRAINT "Flock_branceCode_fkey" FOREIGN KEY ("branceCode") REFERENCES "Brance"("branceCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feed" ADD CONSTRAINT "Feed_feedName_fkey" FOREIGN KEY ("feedName") REFERENCES "FeedNameCategory"("feedName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedecinePurchess" ADD CONSTRAINT "MedecinePurchess_genericName_fkey" FOREIGN KEY ("genericName") REFERENCES "MedicineNameCateogry"("genericName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedecinePurchess" ADD CONSTRAINT "MedecinePurchess_branceCode_fkey" FOREIGN KEY ("branceCode") REFERENCES "Brance"("branceCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medicine" ADD CONSTRAINT "Medicine_genericname_fkey" FOREIGN KEY ("genericname") REFERENCES "MedicineNameCateogry"("genericName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medicine" ADD CONSTRAINT "Medicine_brancCode_fkey" FOREIGN KEY ("brancCode") REFERENCES "Brance"("branceCode") ON DELETE RESTRICT ON UPDATE CASCADE;
