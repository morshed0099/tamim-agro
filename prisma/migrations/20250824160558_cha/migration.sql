/*
  Warnings:

  - Changed the type of `createDate` on the `feedStoc` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "feedStoc" DROP COLUMN "createDate",
ADD COLUMN     "createDate" DATE NOT NULL;
