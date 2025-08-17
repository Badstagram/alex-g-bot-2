import type { Guild } from "discord.js";

import database from "prisma/connection";

export async function addGuildToDatabase(guild: Guild) {
  return await database.guild.create({
    data: {
      guildId: guild.id,
      name: guild.name,
    },
  });
}
