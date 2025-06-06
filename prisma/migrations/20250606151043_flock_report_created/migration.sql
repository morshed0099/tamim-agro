-- CreateTable
CREATE TABLE "FlockReport" (
    "id" TEXT NOT NULL,
    "fcr" DOUBLE PRECISION NOT NULL,
    "executiveId" TEXT NOT NULL,
    "mortality" INTEGER NOT NULL,
    "mortalityPercent" DOUBLE PRECISION NOT NULL,
    "bodyWeight" DOUBLE PRECISION NOT NULL,
    "feedStock" INTEGER NOT NULL,
    "diseases" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "imagesOne" TEXT,
    "imageTwo" TEXT,
    "imageThree" TEXT,
    "visitedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "locationLink" TEXT NOT NULL,
    "farmId" TEXT NOT NULL,
    "flockId" TEXT NOT NULL,
    "branchCode" TEXT NOT NULL,

    CONSTRAINT "FlockReport_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FlockReport" ADD CONSTRAINT "FlockReport_branchCode_fkey" FOREIGN KEY ("branchCode") REFERENCES "branch"("branchCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlockReport" ADD CONSTRAINT "FlockReport_flockId_fkey" FOREIGN KEY ("flockId") REFERENCES "flock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlockReport" ADD CONSTRAINT "FlockReport_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
