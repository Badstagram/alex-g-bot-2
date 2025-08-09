import type { UserError } from "@sapphire/framework";
import type { CacheType, ChatInputCommandInteraction } from "discord.js";

async function denyChatInputCommand(
  error: UserError,
  interaction: ChatInputCommandInteraction<CacheType>,
) {
  const reply = { content: error.message };

  if (interaction.deferred || interaction.replied) {
    return await interaction.editReply(reply);
  }

  return await interaction.reply(reply);
}

export default denyChatInputCommand;
