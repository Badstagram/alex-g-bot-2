import type { ChatInputCommandInteraction } from "discord.js";

import { ContainerBuilder, MessageFlags, SeparatorSpacingSize } from "discord.js";

import { getBankAccount } from "src/database-helpers/bank";
import getCurrencySymbol from "src/utility/getCurrencySymbol";

async function balance(interaction: ChatInputCommandInteraction) {
  if (!interaction.guild) {
    return await interaction.reply("This command can only be run in a valid guild.");
  }

  const bankAccount = await getBankAccount(interaction.user.id, interaction.guild.id);
  if (!bankAccount) {
    return await interaction.reply(
      "You do not have an active bank account in this guild yet. Please run `/bank create-account` to create an account.",
    );
  }
  const currencySymbol = await getCurrencySymbol(interaction.guild.id, interaction);

  const container = new ContainerBuilder()
    .addTextDisplayComponents((builder) => {
      return builder.setContent(`## ${bankAccount.user.globalName} (${bankAccount.guild.name})`);
    })
    .addSeparatorComponents((builder) => {
      return builder.setSpacing(SeparatorSpacingSize.Large);
    })
    .addTextDisplayComponents((builder) => {
      return builder.setContent(`**Current:** ${currencySymbol}${bankAccount.moneyCurrent}`);
    })
    .addTextDisplayComponents((builder) => {
      return builder.setContent(`**Savings:** ${currencySymbol}${bankAccount.moneySavings}`);
    })
    .setAccentColor([0, 255, 0]);

  return await interaction.reply({ components: [container], flags: MessageFlags.IsComponentsV2 });
}

export default balance;
