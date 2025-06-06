-- DropForeignKey
ALTER TABLE "employee" DROP CONSTRAINT "employee_branchCode_fkey";

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "branch"("branchCode") ON DELETE RESTRICT ON UPDATE CASCADE;
