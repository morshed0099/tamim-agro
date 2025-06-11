/*
  Warnings:

  - Added the required column `todayFeedEting` to the `flockReport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalFeedEting` to the `flockReport` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "flockReport" ADD COLUMN     "todayFeedEting" INTEGER NOT NULL,
ADD COLUMN     "totalFeedEting" INTEGER NOT NULL;
