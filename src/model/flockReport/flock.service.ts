import prismaClient from "../../helper/prismaClient";

const createFlockReport = async (payload: any) => {
  const result = await prismaClient.flockReport.create({
    data: payload,
  });
  return result;
};

export const flockReportService = {
  createFlockReport,
};
