import type { ChatInputCommandInteraction } from "discord.js";

import { channelMention } from "discord.js";

import { patchGuild } from "src/database-helpers/guilds";

async function setErrorLogChannel(interaction: ChatInputCommandInteraction) {
  if (!interaction.guild) {
    await interaction.reply("Guild not recognised");
    return;
  }
  const errorLogChannel = interaction.options.getChannel("channel", true);
  await patchGuild(interaction.guild.id, {
    errorLogChannelId: errorLogChannel.id,
  });
  await interaction.reply(`Error log channel set to ${channelMention(errorLogChannel.id)}`);
}

export default setErrorLogChannel;
