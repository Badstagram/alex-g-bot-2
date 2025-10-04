import database from "prisma/connection";

export async function getBankAccount(userId: string, guildId: string) {
  return await database.bankAccount.findUnique({
    where: {
      userId_guildId: {
        userId,
        guildId,
      },
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
  return await database.bankAccount.update({
    where: {
      userId_guildId: {
        userId,
        guildId,
      },
    },
    data,
  });
}
