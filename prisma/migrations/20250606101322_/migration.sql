/*
  Warnings:

  - A unique constraint covering the columns `[employeeId,branchCode]` on the table `employee` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "branchEmployee_employeeId_branchCode_key";

-- CreateIndex
CREATE UNIQUE INDEX "employee_employeeId_branchCode_key" ON "employee"("employeeId", "branchCode");
