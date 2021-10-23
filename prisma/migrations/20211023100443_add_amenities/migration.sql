/*
  Warnings:

  - You are about to drop the `Amenites` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Amenites";

-- CreateTable
CREATE TABLE "Amenities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Amenities_pkey" PRIMARY KEY ("id")
);
