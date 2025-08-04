/*
  Warnings:

  - You are about to drop the column `branchId` on the `employee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "employee" DROP COLUMN "branchId";

-- CreateIndex
CREATE INDEX "employee_employeeId_idx" ON "employee"("employeeId");
