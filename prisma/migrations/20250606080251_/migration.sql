/*
  Warnings:

  - You are about to drop the column `branchId` on the `employee` table. All the data in the column will be lost.
  - Added the required column `branchCode` to the `employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `employee` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "employee" DROP CONSTRAINT "employee_branchId_fkey";

-- AlterTable
ALTER TABLE "employee" DROP COLUMN "branchId",
ADD COLUMN     "branchCode" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "branch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
