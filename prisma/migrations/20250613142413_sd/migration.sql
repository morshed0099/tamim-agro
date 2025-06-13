/*
  Warnings:

  - A unique constraint covering the columns `[genericName,medicineName,branchCode]` on the table `medicineStock` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "medicineStock_genericName_medicineName_key";

-- CreateIndex
CREATE UNIQUE INDEX "medicineStock_genericName_medicineName_branchCode_key" ON "medicineStock"("genericName", "medicineName", "branchCode");
