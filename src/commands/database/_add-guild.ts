import type { ChatInputCommandInteraction } from "discord.js";

import { addGuildToDatabase } from "src/database-helpers/guilds";

async function addGuildCommand(interaction: ChatInputCommandInteraction) {
  if (!interaction.guild) {
    await interaction.reply("Guild not recognised");
    return;
  }
  await addGuildToDatabase(interaction.guild);
  await interaction.reply(`Guild **${interaction.guild.name}** successfully added.`);
}

export default addGuildCommand;
