import type { ChatInputCommandInteraction } from "discord.js";

async function ownerTestCommand(interaction: ChatInputCommandInteraction) {
  await interaction.reply("Alex is the best user");
}

export default ownerTestCommand;
