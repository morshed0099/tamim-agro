import prismaClient from "../../helper/prismaClient";
import result from "../auth/auth.controler";

const createMedicineGeniric = async (payload: any) => {
  const result = await prismaClient.medicineNameCategory.create({
    data: payload,
  });
  return result;
};

const findMedicineGeniric = async () => {
  const result = await prismaClient.medicineNameCategory.findMany({
    include: {
      medicineNameAdd: true,
    },
  });
  return result;
};

const createMedicineName = async (payload: any) => {
  const result = await prismaClient.medicineNameAdd.create({
    data: payload,
  });
  return result;
};

const medicinePurchess = async (payload: any) => {
  let oldStock;

  // Try to find existing stock
  oldStock = await prismaClient.medicineStock.findUnique({
    where: {
      genericName_medicineName: {
        genericName: payload.genericName,
        medicineName: payload.name,
      },
    },
  });
  console.log(oldStock);
  // Handle error if needed

  if (!oldStock) {
    // 1. Create purchase record
    const result = await prismaClient.medicinePurchess.create({
      data: {
        name: payload.name, // Required by schema
        genericName: payload.genericName, // Required by schema
        branchCode: payload.branchCode, // Required by schema
        purchaseUnitPrice: payload.purchaseUnitPrice,
        sellUnitPrice: payload.sellUnitPrice,
        purchaseQuantity: payload.purchaseQuantity,
        mfgDate: payload.mfgDate,
        expDate: payload.expDate,
        bonusQuantity: payload.bonusQuantity,
        purchaseTotalPrice: payload.purchaseTotalPrice,
        supplierInfo: payload.supplierInfo,
      },
    });

   const stock=await prismaClient.medicineStock.create({
      data: {
        genericName: payload.genericName,
        medicineName: payload.name,
        branchCode: payload.branchCode,
        totalStock: payload.purchaseQuantity,
        price: payload.purchaseTotalPrice,
      },
    });
  return result
  }
  // 2. If stock exists, update it — otherwise, create new
  if (oldStock) {
    const result = await prismaClient.medicinePurchess.create({
      data: {
        name: payload.name, // Required by schema
        genericName: payload.genericName, // Required by schema
        branchCode: payload.branchCode, // Required by schema
        purchaseUnitPrice: payload.purchaseUnitPrice,
        sellUnitPrice: payload.sellUnitPrice,
        purchaseQuantity: payload.purchaseQuantity,
        mfgDate: payload.mfgDate,
        expDate: payload.expDate,
        bonusQuantity: payload.bonusQuantity,
        purchaseTotalPrice: payload.purchaseTotalPrice,
        supplierInfo: payload.supplierInfo,
      },
    });

   await prismaClient.medicineStock.update({
      where: {
        genericName_medicineName: {
          genericName: payload.genericName,
          medicineName: payload.name,
        },
      },
      data: {
        totalStock: payload.purchaseQuantity + oldStock.totalStock
      },
    });
    return result;
  }

  return result;
};

const findPurches = async (payload: any) => {
  console.log(payload);
  const result = await prismaClient.medicinePurchess.findMany({
    where: {
      AND: [
        {
          name: payload?.name,
        },
        {
          sellUnitPrice: {
            lt: 10,
          },
        },
      ],
    },
  });
  return result;
};

export const medicineSercive = {
  createMedicineGeniric,
  findMedicineGeniric,
  createMedicineName,
  medicinePurchess,
  findPurches,
};
