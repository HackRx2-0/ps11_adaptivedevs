-- AlterTable
ALTER TABLE "Doctor" ALTER COLUMN "display_name" DROP NOT NULL,
ALTER COLUMN "is_online" DROP NOT NULL,
ALTER COLUMN "ready_to_accept_patients" DROP NOT NULL;
