-- AlterTable
ALTER TABLE "Doctor" ALTER COLUMN "doctor_introduction" DROP NOT NULL,
ALTER COLUMN "is_online" SET DEFAULT false;
