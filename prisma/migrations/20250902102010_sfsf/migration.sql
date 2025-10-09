/*
  Warnings:

  - Added the required column `price` to the `addStock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "addStock" ADD COLUMN     "price" INTEGER NOT NULL;
