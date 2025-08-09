import database from "prisma/connection";

async function executeQuery(query: string) {
  try {
    return { queryResult: await database.$queryRawUnsafe(query), success: true };
  } catch (error: unknown) {
    return { queryResult: error, success: false };
  }
}

export default executeQuery;
