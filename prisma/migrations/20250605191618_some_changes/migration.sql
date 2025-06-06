-- DropForeignKey
ALTER TABLE "farmer" DROP CONSTRAINT "farmer_branchCode_fkey";

-- AlterTable
ALTER TABLE "farmer" ALTER COLUMN "branchCode" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "farmer" ADD CONSTRAINT "farmer_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "branch"("branchCode") ON DELETE SET NULL ON UPDATE CASCADE;
