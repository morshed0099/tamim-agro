/*
  Warnings:

  - You are about to drop the `feedStoc` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "feedStoc" DROP CONSTRAINT "feedStoc_branchId_fkey";

-- DropForeignKey
ALTER TABLE "feedStoc" DROP CONSTRAINT "feedStoc_depotName_fkey";

-- DropForeignKey
ALTER TABLE "feedStoc" DROP CONSTRAINT "feedStoc_feedName_fkey";

-- DropTable
DROP TABLE "feedStoc";
