import { Prisma } from "../../generated/prisma";
import prismaClient from "../../helper/prismaClient";

const createMedicineGeniric = async (payload: any) => {
  const result = await prismaClient.allGenericMedicin.create({
    data: payload,
  });
  return result;
};

const findMedicineGeniric = async () => {
  const result = await prismaClient.allGenericMedicin.findMany({
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
  if (payload.medicine.length > 1) {
    let array: any[] = [];
    const hi = await payload.medicine.map(async (element: any) => {
      const result = await prismaClient.medicinePurchess.create({
        data: element,
      });
      array.push(result);
      return array;
    });

    //  best solution is ******

    //     const results = [];

    // for (const element of payload.medicine) {
    //   const result = await prismaClient.medicinePurchess.create({ data: element });
    //   results.push(result);
    // }

    // return results;

    // another solution is ****
    // const result = await prismaClient.medicinePurchess.createMany({
    //   data: payload.medicine,
    // });
    // return result;
  } else {
    const result = await prismaClient.medicinePurchess.create({
      data: payload.medicine[0],
    });
    return result;
  }

  // let oldStock;
  // Try to find existing stock
  // oldStock = await prismaClient.medicineStock.findUnique({
  //   where: {
  //     genericName_medicineName: {
  //       genericName: payload.genericName,
  //       medicineName: payload.name,
  //     },
  //   },
  // });
  // console.log(oldStock);
  // // Handle error if needed

  // if (!oldStock) {
  //   // 1. Create purchase record
  //   const result = await prismaClient.medicinePurchess.create({
  //     data: {
  //       name: payload.name, // Required by schema
  //       genericName: payload.genericName, // Required by schema
  //       branchCode: payload.branchCode, // Required by schema
  //       purchaseUnitPrice: payload.purchaseUnitPrice,
  //       sellUnitPrice: payload.sellUnitPrice,
  //       purchaseQuantity: payload.purchaseQuantity,
  //       mfgDate: payload.mfgDate,
  //       expDate: payload.expDate,
  //       bonusQuantity: payload.bonusQuantity,
  //       purchaseTotalPrice: payload.purchaseTotalPrice,
  //       supplierInfo: payload.supplierInfo,
  //       createdAt: payload.createdAt,
  //     },
  //   });

  //   const stock = await prismaClient.medicineStock.create({
  //     data: {
  //       genericName: payload.genericName,
  //       medicineName: payload.name,
  //       branchCode: payload.branchCode,
  //       totalStock: payload.purchaseQuantity,
  //       price: payload.purchaseTotalPrice,
  //       createdAt: payload.createdAt,
  //     },
  //   });
  //   return result;
  // }
  // // 2. If stock exists, update it — otherwise, create new
  // if (oldStock) {
  //   const result = await prismaClient.medicinePurchess.create({
  //     data: {
  //       name: payload.name, // Required by schema
  //       genericName: payload.genericName, // Required by schema
  //       branchCode: payload.branchCode, // Required by schema
  //       purchaseUnitPrice: payload.purchaseUnitPrice,
  //       sellUnitPrice: payload.sellUnitPrice,
  //       purchaseQuantity: payload.purchaseQuantity,
  //       mfgDate: payload.mfgDate,
  //       expDate: payload.expDate,
  //       bonusQuantity: payload.bonusQuantity,
  //       purchaseTotalPrice: payload.purchaseTotalPrice,
  //       supplierInfo: payload.supplierInfo,
  //       createdAt: payload.createdAt,
  //     },
  //   });

  //   await prismaClient.medicineStock.update({
  //     where: {
  //       genericName_medicineName: {
  //         genericName: payload.genericName,
  //         medicineName: payload.name,
  //       },
  //     },
  //     data: {
  //       totalStock: payload.purchaseQuantity + oldStock.totalStock,
  //     },
  //   });
  //   return result;
  // }

  // return result;
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

const addStockMedicine = async (payload: any) => {
  if (payload.medicine.length > 0) {
    for (const elemet of payload.medicine) {
      const oldstock = await prismaClient.medicineStock.findFirst({
        where: {
          AND: [
            {
              medicineName: elemet.medicineName,
            },
            {
              genericName: elemet.genericName,
            },
            {
              branchCode: elemet.branchCode,
            },
          ],
        },
      });

      if (oldstock) {
        const totalStock: number = oldstock.totalStock + elemet.totalStock;

        const updateStock = await prismaClient.medicineStock.update({
          where: {
            id: oldstock.id,
          },
          data: {
            totalStock: totalStock,
          },
        });
      } else {
        const result = await prismaClient.medicineStock.create({
          data: elemet,
        });
      }
    }
  }
};

const getStock = async (params: any) => {
  const { searchTermp, ...filterData } = params;
  const adnconditon: Prisma.MedicineStockWhereInput[] = [];

  if (searchTermp) {
    adnconditon.push({
      OR: ["genericName", "medicineName"].map((feilds) => ({
        [feilds]: {
          conntains: searchTermp,
          mode: "incensitive",
        },
      })),
    });
  }

  if (filterData) {
    adnconditon.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: filterData[key],
        },
      })),
    });
  }
  const whereCondition: Prisma.MedicineStockWhereInput = { AND: adnconditon };
  const result = await prismaClient.medicineStock.findMany({
    where: whereCondition,
  });
  return result;
};

export const medicineSercive = {
  createMedicineGeniric,
  findMedicineGeniric,
  createMedicineName,
  medicinePurchess,
  findPurches,
  addStockMedicine,
};
