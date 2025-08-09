-- CreateTable
CREATE TABLE "public"."users" (
    "user_id" TEXT NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "global_name" VARCHAR(100) NOT NULL,
    "bot_user" BOOLEAN NOT NULL,
    "date_of_birth" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);
