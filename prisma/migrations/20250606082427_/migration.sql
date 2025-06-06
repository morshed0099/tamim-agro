/*
  Warnings:

  - A unique constraint covering the columns `[employeeId,branchCode]` on the table `branchEmployee` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "branchEmployee_employeeId_branchCode_key" ON "branchEmployee"("employeeId", "branchCode");
