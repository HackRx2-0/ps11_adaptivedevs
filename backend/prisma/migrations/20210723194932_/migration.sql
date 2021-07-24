/*
  Warnings:

  - You are about to drop the `DoctorServices` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DoctorToDoctorServices` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_DoctorToDoctorServices" DROP CONSTRAINT "_DoctorToDoctorServices_A_fkey";

-- DropForeignKey
ALTER TABLE "_DoctorToDoctorServices" DROP CONSTRAINT "_DoctorToDoctorServices_B_fkey";

-- DropTable
DROP TABLE "DoctorServices";

-- DropTable
DROP TABLE "_DoctorToDoctorServices";

-- CreateTable
CREATE TABLE "DoctorSpecialities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DoctorToDoctorSpecialities" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DoctorToDoctorSpecialities_AB_unique" ON "_DoctorToDoctorSpecialities"("A", "B");

-- CreateIndex
CREATE INDEX "_DoctorToDoctorSpecialities_B_index" ON "_DoctorToDoctorSpecialities"("B");

-- AddForeignKey
ALTER TABLE "_DoctorToDoctorSpecialities" ADD FOREIGN KEY ("A") REFERENCES "Doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DoctorToDoctorSpecialities" ADD FOREIGN KEY ("B") REFERENCES "DoctorSpecialities"("id") ON DELETE CASCADE ON UPDATE CASCADE;
