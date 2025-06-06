-- DropForeignKey
ALTER TABLE "farmer" DROP CONSTRAINT "farmer_id_fkey";

-- AddForeignKey
ALTER TABLE "farmer" ADD CONSTRAINT "farmer_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;
