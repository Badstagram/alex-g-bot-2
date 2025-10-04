import type {
  Guild,
  InteractionReplyOptions,
  InteractionResponse,
  MessagePayload,
  User,
} from "discord.js";

import z from "zod";

import { getBankAccount, updateBankAccount } from "src/database-helpers/bank";

interface PeopleInvolvedInPayment {
  from: User;
  to: User;
}

const paymentData = z.object({
  oldPayerCurrent: z.number().positive(),
  newPayerCurrent: z.number().positive(),
  oldPayeeCurrent: z.number().positive(),
  newPayeeCurrent: z.number().positive(),
});
export type PaymentData = z.infer<typeof paymentData>;
export function parsePaymentData(data: unknown) {
  return paymentData.parse(data);
}

async function makePayment(
  { from: payer, to: payee }: PeopleInvolvedInPayment,
  guild: Guild,
  transferAmount: number,
  reply?: (
    options:
      | string
      | MessagePayload
      | (InteractionReplyOptions & {
          withResponse: true;
        }),
  ) => Promise<InteractionResponse<boolean>>,
): Promise<InteractionResponse<boolean> | PaymentData> {
  const payerBankAccount = await getBankAccount(payer.id, guild.id);
  if (!payerBankAccount) {
    if (reply) {
      return await reply(
        "You do not have an active bank account in this guild yet. Please run `/bank create-account` to create an account.",
      );
    }
    throw new Error("PAYER_BANK_ACCOUNT_NOT_FOUND");
  }

  const payeeBankAccount = await getBankAccount(payee.id, guild.id);
  if (!payeeBankAccount) {
    if (reply) {
      return await reply(
        "The person you are trying to pay does not have an active bank account in this guild yet.",
      );
    }
    throw new Error("PAYEE_BANK_ACCOUNT_NOT_FOUND");
  }

  const newPayerCurrent = payerBankAccount.moneyCurrent - transferAmount;
  if (newPayerCurrent < 0) {
    if (reply) {
      return await reply("You do not have enough money to make this payment.");
    }
    throw new Error("INSUFFICIENT_MONEY");
  }
  const newPayeeCurrent = payeeBankAccount.moneyCurrent + transferAmount;

  await updateBankAccount(payer.id, guild.id, { moneyCurrent: newPayerCurrent });
  await updateBankAccount(payee.id, guild.id, { moneyCurrent: newPayeeCurrent });
  return {
    oldPayerCurrent: payerBankAccount.moneyCurrent,
    newPayerCurrent,
    oldPayeeCurrent: payeeBankAccount.moneyCurrent,
    newPayeeCurrent,
  };
}

export default makePayment;
