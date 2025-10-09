/*
  Warnings:

  - The `endDate` column on the `branchEmployee` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `unitPice` on the `feedStoc` table. All the data in the column will be lost.
  - You are about to drop the column `quntity` on the `transferFeedItem` table. All the data in the column will be lost.
  - Changed the type of `startDate` on the `branchEmployee` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `createDate` on the `depot` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `createDate` on the `farmer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `createDate` on the `feedNameCategory` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `createDate` on the `feedSalesItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `createDate` on the `feedSalesOrder` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `transerFerDate` on the `feedStockTransfer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `quantity` to the `transferFeedItem` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `createDate` on the `transferFeedItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "branchEmployee" DROP COLUMN "startDate",
ADD COLUMN     "startDate" DATE NOT NULL,
DROP COLUMN "endDate",
ADD COLUMN     "endDate" DATE;

-- AlterTable
ALTER TABLE "depot" DROP COLUMN "createDate",
ADD COLUMN     "createDate" DATE NOT NULL;

-- AlterTable
ALTER TABLE "farmer" DROP COLUMN "createDate",
ADD COLUMN     "createDate" DATE NOT NULL;

-- AlterTable
ALTER TABLE "feedNameCategory" DROP COLUMN "createDate",
ADD COLUMN     "createDate" DATE NOT NULL;

-- AlterTable
ALTER TABLE "feedSalesItem" DROP COLUMN "createDate",
ADD COLUMN     "createDate" DATE NOT NULL;

-- AlterTable
ALTER TABLE "feedSalesOrder" DROP COLUMN "createDate",
ADD COLUMN     "createDate" DATE NOT NULL;

-- AlterTable
ALTER TABLE "feedStoc" DROP COLUMN "unitPice",
ADD COLUMN     "unitPrice" INTEGER NOT NULL DEFAULT 60;

-- AlterTable
ALTER TABLE "feedStockTransfer" DROP COLUMN "transerFerDate",
ADD COLUMN     "transerFerDate" DATE NOT NULL;

-- AlterTable
ALTER TABLE "flock" ALTER COLUMN "startDate" SET DATA TYPE DATE,
ALTER COLUMN "endDate" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "transferFeedItem" DROP COLUMN "quntity",
ADD COLUMN     "quantity" TEXT NOT NULL,
DROP COLUMN "createDate",
ADD COLUMN     "createDate" DATE NOT NULL;
