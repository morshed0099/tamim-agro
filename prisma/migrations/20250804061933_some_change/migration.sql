/*
  Warnings:

  - You are about to drop the column `workingLocation` on the `employee` table. All the data in the column will be lost.
  - Added the required column `createDate` to the `employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "employee" DROP COLUMN "workingLocation",
ADD COLUMN     "createDate" TEXT NOT NULL,
ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;
