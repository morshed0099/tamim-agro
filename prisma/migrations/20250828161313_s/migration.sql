/*
  Warnings:

  - You are about to drop the column `deliveryDate` on the `AddStockItem` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `AddStockItem` table. All the data in the column will be lost.
  - Added the required column `deliveryDate` to the `addStock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AddStockItem" DROP COLUMN "deliveryDate",
DROP COLUMN "status";

-- AlterTable
ALTER TABLE "addStock" ADD COLUMN     "deliveryDate" DATE NOT NULL,
ADD COLUMN     "status" "DeliveryStatus" NOT NULL DEFAULT 'PENDING';
