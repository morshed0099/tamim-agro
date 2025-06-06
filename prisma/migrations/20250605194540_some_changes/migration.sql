/*
  Warnings:

  - You are about to drop the column `farmCode` on the `address` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[farmerId]` on the table `address` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "address_farmCode_key";

-- AlterTable
ALTER TABLE "address" DROP COLUMN "farmCode",
ADD COLUMN     "farmerId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "address_farmerId_key" ON "address"("farmerId");
