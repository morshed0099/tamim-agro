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

const sellMedicine = async (params: any) => {
  // 1. Get farm info
  const farm = await prismaClient.farmer.findFirst({
    where: {
      AND: [
        { branchCode: params.branchCode },
        { farmCode: params.farmCode },
      ],
    },
  });

  if (!farm) throw new Error("Farmer not found");

  // 2. Generate billNumber (get last one and increment)
  const lastBill = await prismaClient.sellMedicine.findFirst({
    where: { branchCode: params.branchCode },
    orderBy: { createdAt: "desc" },
  });

  const newBillNumber = lastBill ? lastBill.billNumber + 1 : 1;

  // 3. Create SellMedicine entry


  const sellMedicine = await prismaClient.sellMedicine.create({
    data: {
      billNumber: newBillNumber,
      farmId: farm.id,
      flockNumer: params.flockNumer,
      branchCode: params.branchCode,
      sellDate: params.sellDate || new Date().toISOString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  // 4. Loop through items
  for (const itm of params.item) {
    const stock = await prismaClient.medicineStock.findFirst({
      where: {
        medicineName: itm.name,
        branchCode: params.branchCode, // optional if you track by branch
      },
    });

    if (stock && stock.totalStock >= itm.quantity) {
      // Update stock
      await prismaClient.medicineStock.update({
        where: {
          id: stock.id,
        },
        data: {
          totalStock: stock.totalStock - itm.quantity,
        },
      });

      // Create medicine item with valid bill number
      await prismaClient.medicineItem.create({
        data: {
          name: itm.name,
          quantity: itm.quantity,
          billNumber: newBillNumber,
        },
      });
    } else {
      throw new Error(`Insufficient stock for ${itm.name}`);
    }
  }

  // 5. Return sellMedicine with items
  const result = await prismaClient.sellMedicine.findUnique({
    where: {
      billNumber: newBillNumber,
    },
    include: {
      MedicineItem: true,
    },
  });

  return result;
};

// const sellMedicine = async (params: any) => {
//   // console.log(params);
//   const farmId = await prismaClient.farmer.findFirst({
//     where: {
//       AND: [{ branchCode: params.branchCode }, { farmCode: params.farmCode }],
//     },
//   });

//   if (params.item.length > 1) {
//     for (const itm of params.item) {
//       const stock = await prismaClient.medicineStock.findFirst({
//         where: {
//           medicineName: itm.name,
//         },
//       });

//       if (stock) {
//         const newStock = stock.totalStock - itm.quantity;
//         await prismaClient.medicineStock.update({
//           where: {
//             id: stock.id,
//           },
//           data: {
//             totalStock: stock.totalStock - itm.quantity,
//           },
//         });
//         await prismaClient.medicineItem.create({
//           data: {
//             name: itm.name,
//             quantity: itm.quantity,
//             billNumber: 22,
//           },
//         });
//       }
//     }
//   } else {
//     const stock = await prismaClient.medicineStock.findFirst({
//       where: {
//         medicineName: params.item.name,
//       },
//     });

//     if (stock) {
//       const newStock = stock.totalStock - params.item[0].quantity;
  


//       await prismaClient.medicineStock.update({
//         where: {
//           id: stock?.id,
//         },
//         data: {
//           totalStock: newStock,
//         },
//       });
//     }



//     await prismaClient.medicineItem.create({
//       data: {
//         name: params.item[0].name,
//         quantity: params.item[0].quantity,
//         billNumber: 23,
//       },
//     });
//   }

//   const medicineStock = await prismaClient.medicineStock.findFirst({
//     where: {
//       medicineName: params.item.name,
//     },
//   });

//   const result = await prismaClient.sellMedicine.findFirst({
//     where: {
//       billNumber: 22,
//     },
//     include: {
//       MedicineItem: true,
//     },
//   });
//   return result;
// };

export const medicineSercive = {
  createMedicineGeniric,
  findMedicineGeniric,
  createMedicineName,
  medicinePurchess,
  findPurches,
  addStockMedicine,
  sellMedicine,
};
