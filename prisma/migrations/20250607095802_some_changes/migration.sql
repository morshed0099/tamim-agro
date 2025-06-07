/*
  Warnings:

  - Added the required column `housedBirds` to the `flockReport` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "flockReport" ADD COLUMN     "housedBirds" INTEGER NOT NULL,
ALTER COLUMN "fcr" DROP NOT NULL,
ALTER COLUMN "totalMortality" DROP NOT NULL,
ALTER COLUMN "todayMortalityPercent" DROP NOT NULL,
ALTER COLUMN "totalMortalityPercentage" DROP NOT NULL;
