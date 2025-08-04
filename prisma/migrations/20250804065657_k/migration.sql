/*
  Warnings:

  - Added the required column `nid` to the `employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "employee" ADD COLUMN     "nid" TEXT NOT NULL;
