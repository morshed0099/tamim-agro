-- AlterTable
ALTER TABLE "AddStockItem" ADD COLUMN     "unitPrice" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "RetunFeedItem" ADD COLUMN     "unitPrice" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "feedSalesItem" ADD COLUMN     "unitPrice" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "transferFeedItem" ADD COLUMN     "unitPrice" INTEGER NOT NULL DEFAULT 0;
