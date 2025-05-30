/*
  Warnings:

  - A unique constraint covering the columns `[genericName]` on the table `medicineStock` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[medicineName]` on the table `medicineStock` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[genericName,medicineName]` on the table `medicineStock` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "medicineStock_genericName_key" ON "medicineStock"("genericName");

-- CreateIndex
CREATE UNIQUE INDEX "medicineStock_medicineName_key" ON "medicineStock"("medicineName");

-- CreateIndex
CREATE UNIQUE INDEX "medicineStock_genericName_medicineName_key" ON "medicineStock"("genericName", "medicineName");
