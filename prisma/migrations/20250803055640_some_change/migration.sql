/*
  Warnings:

  - Added the required column `createDate` to the `farmer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "farmer" ADD COLUMN     "createDate" TEXT NOT NULL,
ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;
