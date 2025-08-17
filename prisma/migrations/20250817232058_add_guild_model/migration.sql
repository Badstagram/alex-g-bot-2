-- CreateTable
CREATE TABLE "public"."guilds" (
    "guild_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "error_log_channel_id" TEXT,

    CONSTRAINT "guilds_pkey" PRIMARY KEY ("guild_id")
);
