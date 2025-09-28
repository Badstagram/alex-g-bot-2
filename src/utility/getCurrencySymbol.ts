import type { ChatInputCommandInteraction } from "discord.js";

import { getGuildById } from "src/database-helpers/guilds";

async function getCurrencySymbol(
  guildId: string,
  interaction?: ChatInputCommandInteraction,
): Promise<string> {
  const databaseGuild = await getGuildById(guildId);
  if (!databaseGuild) {
    if (interaction) {
      await interaction.reply(
        `Guild not set in database.${process.env.OWNER_ID ? ` Please ask ${process.env.OWNER_ID} to add this guild to the database.` : ""}`,
      );
      return "£";
    }
    throw new Error("GUILD_NOT_FOUND_IN_DATABASE");
  }
  return databaseGuild.currencySymbol;
}

export default getCurrencySymbol;
