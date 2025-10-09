-- CreateTable
CREATE TABLE "feedRetun" (
    "id" TEXT NOT NULL,
    "flockId" TEXT NOT NULL,
    "branChCode" TEXT NOT NULL,
    "farmCode" INTEGER NOT NULL,
    "flockNumber" INTEGER NOT NULL,
    "returnInvoice" TEXT NOT NULL,
    "createDate" DATE NOT NULL,
    "farmId" TEXT NOT NULL,
    "depotName" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "feedRetun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RetunFeedItem" (
    "id" TEXT NOT NULL,
    "feedName" TEXT NOT NULL,
    "qunantity" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "returnInvoice" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RetunFeedItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "feedRetun_returnInvoice_key" ON "feedRetun"("returnInvoice");

-- AddForeignKey
ALTER TABLE "feedRetun" ADD CONSTRAINT "feedRetun_flockId_fkey" FOREIGN KEY ("flockId") REFERENCES "flock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedRetun" ADD CONSTRAINT "feedRetun_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedRetun" ADD CONSTRAINT "feedRetun_depotName_fkey" FOREIGN KEY ("depotName") REFERENCES "depot"("depotName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RetunFeedItem" ADD CONSTRAINT "RetunFeedItem_returnInvoice_fkey" FOREIGN KEY ("returnInvoice") REFERENCES "feedRetun"("returnInvoice") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RetunFeedItem" ADD CONSTRAINT "RetunFeedItem_feedName_fkey" FOREIGN KEY ("feedName") REFERENCES "feedNameCategory"("feedName") ON DELETE RESTRICT ON UPDATE CASCADE;
