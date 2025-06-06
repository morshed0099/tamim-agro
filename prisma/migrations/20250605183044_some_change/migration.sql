-- DropForeignKey
ALTER TABLE "farmer" DROP CONSTRAINT "farmer_addressId_fkey";

-- AlterTable
ALTER TABLE "farmer" ALTER COLUMN "addressId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "farmer" ADD CONSTRAINT "farmer_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("farmCode") ON DELETE SET NULL ON UPDATE CASCADE;
