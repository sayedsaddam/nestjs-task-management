/*
  Warnings:

  - You are about to drop the `Amenity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Amenity";

-- CreateTable
CREATE TABLE "Amenites" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Amenites_pkey" PRIMARY KEY ("id")
);
