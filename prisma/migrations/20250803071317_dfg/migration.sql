/*
  Warnings:

  - You are about to drop the column `city` on the `address` table. All the data in the column will be lost.
  - Added the required column `distic` to the `address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "Custtype" ADD VALUE 'Both';

-- AlterTable
ALTER TABLE "address" DROP COLUMN "city",
ADD COLUMN     "distic" TEXT NOT NULL,
ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;
