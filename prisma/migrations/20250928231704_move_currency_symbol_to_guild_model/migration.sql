/*
  Warnings:

  - You are about to drop the column `currency_symbol` on the `bank_accounts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."bank_accounts" DROP COLUMN "currency_symbol";

-- AlterTable
ALTER TABLE "public"."guilds" ADD COLUMN     "currency_symbol" TEXT NOT NULL DEFAULT '£';
