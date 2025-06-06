/*
  Warnings:

  - You are about to drop the column `farmerId` on the `address` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[addressId]` on the table `farmer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `addressId` to the `farmer` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "address_farmerId_key";

-- AlterTable
ALTER TABLE "address" DROP COLUMN "farmerId";

-- AlterTable
ALTER TABLE "farmer" ADD COLUMN     "addressId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "farmer_addressId_key" ON "farmer"("addressId");
