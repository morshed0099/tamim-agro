/*
  Warnings:

  - You are about to drop the column `addressId` on the `farmer` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "farmer" DROP CONSTRAINT "farmer_addressId_fkey";

-- DropIndex
DROP INDEX "farmer_addressId_key";

-- AlterTable
ALTER TABLE "farmer" DROP COLUMN "addressId";

-- AddForeignKey
ALTER TABLE "farmer" ADD CONSTRAINT "farmer_id_fkey" FOREIGN KEY ("id") REFERENCES "address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
