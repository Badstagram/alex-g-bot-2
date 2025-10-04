/*
  Warnings:

  - The primary key for the `bank_accounts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `bank_accounts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "bank_accounts" DROP CONSTRAINT "bank_accounts_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "bank_accounts_pkey" PRIMARY KEY ("user_id", "guild_id");
