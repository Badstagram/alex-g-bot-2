import type { ChatInputCommandInteraction } from "discord.js";

import { ContainerBuilder, MessageFlags, SeparatorSpacingSize } from "discord.js";

import { createBankAccount } from "src/database-helpers/bank";
import getCurrencySymbol from "src/utility/getCurrencySymbol";

async function createAccount(interaction: ChatInputCommandInteraction) {
  if (!interaction.guild) {
    return await interaction.reply("This command can only be run in a valid guild.");
  }
  const createdBankAccount = await createBankAccount(interaction.user.id, interaction.guild.id);
  const currencySymbol = await getCurrencySymbol(interaction.guild.id, interaction);

  const container = new ContainerBuilder()
    .addTextDisplayComponents((builder) => {
      return builder.setContent("## Bank Account Created");
    })
    .addTextDisplayComponents((builder) => {
      return builder.setContent(
        `### ${createdBankAccount.user.globalName} (${createdBankAccount.guild.name})`,
      );
    })
    .addSeparatorComponents((builder) => {
      return builder.setSpacing(SeparatorSpacingSize.Large);
    })
    .addTextDisplayComponents((builder) => {
      return builder.setContent(`**Current:** ${currencySymbol}${createdBankAccount.moneyCurrent}`);
    })
    .addTextDisplayComponents((builder) => {
      return builder.setContent(`**Savings:** ${currencySymbol}${createdBankAccount.moneySavings}`);
    })
    .setAccentColor([0, 255, 0]);

  return await interaction.reply({ components: [container], flags: MessageFlags.IsComponentsV2 });
}

export default createAccount;
