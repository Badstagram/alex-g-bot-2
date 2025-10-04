import database from "prisma/connection";

export async function getBankAccount(userId: string, guildId: string) {
  return await database.bankAccount.findFirst({
    where: {
      userId,
      guildId,
    },
    include: {
      user: {
        select: {
          username: true,
          globalName: true,
        },
      },
      guild: {
        select: {
          name: true,
        },
      },
    },
  });
}

export async function createBankAccount(userId: string, guildId: string) {
  return await database.bankAccount.create({
    data: {
      userId,
      guildId,
    },
    include: {
      user: {
        select: {
          username: true,
          globalName: true,
        },
      },
      guild: {
        select: {
          name: true,
        },
      },
    },
  });
}

interface BankAccountData {
  moneyCurrent?: number;
  moneySavings?: number;
}

export async function updateBankAccount(userId: string, guildId: string, data: BankAccountData) {
  return await database.bankAccount.updateMany({
    where: {
      userId,
      guildId,
    },
    data,
  });
}
