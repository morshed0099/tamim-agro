-- CreateTable
CREATE TABLE "farmFeedStock" (
    "id" TEXT NOT NULL,
    "flockId" TEXT NOT NULL,
    "feedName" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "farmFeedStock_pkey" PRIMARY KEY ("id")
);
