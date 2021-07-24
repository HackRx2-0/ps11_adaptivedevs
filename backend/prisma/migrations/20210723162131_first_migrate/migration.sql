/*
  Warnings:

  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `roles` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[uuid]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone_number]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `phone_number` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `User` table without a default value. This is not possible if the table is not empty.
  - The required column `uuid` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female', 'other');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('patient', 'doctor', 'admin', 'superAdmin');

-- CreateEnum
CREATE TYPE "SessionType" AS ENUM ('authenticatedSession', 'anonymousSession');

-- DropIndex
DROP INDEX "User.phoneNumber_unique";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "phoneNumber",
DROP COLUMN "roles",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "doctorId" INTEGER,
ADD COLUMN     "gender" "Gender",
ADD COLUMN     "name" TEXT,
ADD COLUMN     "phone_number" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT E'patient',
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "uuid" TEXT NOT NULL,
ADD COLUMN     "verified" BOOLEAN DEFAULT false;

-- DropEnum
DROP TYPE "Roles";

-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Doctor" (
    "id" SERIAL NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "display_name" TEXT NOT NULL,
    "mrn" TEXT,
    "doctor_introduction" TEXT NOT NULL,
    "photo" TEXT,
    "url_slug" TEXT,
    "last_online" TIMESTAMP(3),
    "is_online" BOOLEAN NOT NULL,
    "ready_to_accept_patients" BOOLEAN NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DoctorLanguagesSpoken" (
    "id" SERIAL NOT NULL,
    "language" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DoctorServices" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DoctorQualifications" (
    "id" SERIAL NOT NULL,
    "degree" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "invalidated" BOOLEAN NOT NULL,
    "type" "SessionType" NOT NULL,
    "userId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DoctorToDoctorServices" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DoctorToDoctorQualifications" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DoctorToDoctorLanguagesSpoken" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE INDEX "Doctor.is_online_index" ON "Doctor"("is_online");

-- CreateIndex
CREATE UNIQUE INDEX "Session.token_unique" ON "Session"("token");

-- CreateIndex
CREATE INDEX "Session.token_index" ON "Session"("token");

-- CreateIndex
CREATE UNIQUE INDEX "_DoctorToDoctorServices_AB_unique" ON "_DoctorToDoctorServices"("A", "B");

-- CreateIndex
CREATE INDEX "_DoctorToDoctorServices_B_index" ON "_DoctorToDoctorServices"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DoctorToDoctorQualifications_AB_unique" ON "_DoctorToDoctorQualifications"("A", "B");

-- CreateIndex
CREATE INDEX "_DoctorToDoctorQualifications_B_index" ON "_DoctorToDoctorQualifications"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DoctorToDoctorLanguagesSpoken_AB_unique" ON "_DoctorToDoctorLanguagesSpoken"("A", "B");

-- CreateIndex
CREATE INDEX "_DoctorToDoctorLanguagesSpoken_B_index" ON "_DoctorToDoctorLanguagesSpoken"("B");

-- CreateIndex
CREATE UNIQUE INDEX "User.uuid_unique" ON "User"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "User.phone_number_unique" ON "User"("phone_number");

-- CreateIndex
CREATE INDEX "User.uuid_index" ON "User"("uuid");

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DoctorToDoctorServices" ADD FOREIGN KEY ("A") REFERENCES "Doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DoctorToDoctorServices" ADD FOREIGN KEY ("B") REFERENCES "DoctorServices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DoctorToDoctorQualifications" ADD FOREIGN KEY ("A") REFERENCES "Doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DoctorToDoctorQualifications" ADD FOREIGN KEY ("B") REFERENCES "DoctorQualifications"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DoctorToDoctorLanguagesSpoken" ADD FOREIGN KEY ("A") REFERENCES "Doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DoctorToDoctorLanguagesSpoken" ADD FOREIGN KEY ("B") REFERENCES "DoctorLanguagesSpoken"("id") ON DELETE CASCADE ON UPDATE CASCADE;
