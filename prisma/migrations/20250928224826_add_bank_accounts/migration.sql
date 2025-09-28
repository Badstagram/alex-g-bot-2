-- CreateTable
CREATE TABLE "public"."bank_accounts" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" TEXT NOT NULL,
    "guild_id" TEXT NOT NULL,
    "money_current" DOUBLE PRECISION NOT NULL,
    "money_savings" DOUBLE PRECISION NOT NULL,
    "currency_symbol" TEXT NOT NULL DEFAULT '£',

    CONSTRAINT "bank_accounts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."bank_accounts" ADD CONSTRAINT "bank_accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."bank_accounts" ADD CONSTRAINT "bank_accounts_guild_id_fkey" FOREIGN KEY ("guild_id") REFERENCES "public"."guilds"("guild_id") ON DELETE CASCADE ON UPDATE CASCADE;
