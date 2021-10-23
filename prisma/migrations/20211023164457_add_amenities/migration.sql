/*
  Warnings:

  - Added the required column `project` to the `Amenities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Amenities" ADD COLUMN     "project" INTEGER NOT NULL;
