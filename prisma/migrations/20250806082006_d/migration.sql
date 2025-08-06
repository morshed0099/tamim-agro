-- AlterTable
ALTER TABLE "branchEmployee" ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE INDEX "branchEmployee_employeeId_idx" ON "branchEmployee"("employeeId");
