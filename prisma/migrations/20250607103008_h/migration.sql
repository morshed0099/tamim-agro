/*
  Warnings:

  - Added the required column `birdsStock` to the `flockReport` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "flockReport" ADD COLUMN     "birdsStock" INTEGER NOT NULL;
