import type { User } from "discord.js";
import database from "prisma/connection";

async function addUserToDatabase(user: User) {
  return await database.user.create({
    data: {
      userId: user.id,
      username: user.username,
      globalName: user.globalName ?? user.username,
      botUser: user.bot,
    },
  });
}

export default addUserToDatabase;
