/*
  Warnings:

  - You are about to drop the column `branchCode` on the `employee` table. All the data in the column will be lost.
  - Added the required column `createdAt` to the `address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `branch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `branchEmployee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `farmer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `flock` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Stored" AS ENUM ('FACTORY', 'DEPOT');

-- DropForeignKey
ALTER TABLE "employee" DROP CONSTRAINT "employee_branchCode_fkey";

-- DropIndex
DROP INDEX "employee_employeeId_branchCode_key";

-- AlterTable
ALTER TABLE "address" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "branch" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "branchEmployee" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "employee" DROP COLUMN "branchCode",
ADD COLUMN     "branchId" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "farmer" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "flock" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "medicinePurchess" ADD COLUMN     "stored" "Stored" NOT NULL DEFAULT 'FACTORY';
