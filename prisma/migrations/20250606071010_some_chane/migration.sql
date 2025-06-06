/*
  Warnings:

  - You are about to drop the column `employeeId` on the `address` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `address` table. All the data in the column will be lost.
  - Added the required column `phoneNumber` to the `farmer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "employee" DROP CONSTRAINT "employee_addressId_fkey";

-- DropIndex
DROP INDEX "address_employeeId_key";

-- AlterTable
ALTER TABLE "address" DROP COLUMN "employeeId",
DROP COLUMN "phoneNumber";

-- AlterTable
ALTER TABLE "farmer" ADD COLUMN     "phoneNumber" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;
