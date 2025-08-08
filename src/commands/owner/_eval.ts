import type { ChatInputCommandInteraction } from "discord.js";
import { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } from "discord.js";

async function evalCommand(interaction: ChatInputCommandInteraction) {
  const modal = new ModalBuilder().setCustomId("eval").setTitle("Eval");

  const codeInput = new TextInputBuilder()
    .setCustomId("code")
    .setLabel("Enter your code here")
    .setStyle(TextInputStyle.Paragraph);

  const lineSpacing = new TextInputBuilder()
    .setCustomId("lineSpacing")
    .setLabel("Set line spacing of output")
    .setStyle(TextInputStyle.Short)
    .setRequired(false);

  const showEnvironmentVariables = new TextInputBuilder()
    .setCustomId("showEnvironmentVariables")
    .setLabel("Show Environment Variables")
    .setStyle(TextInputStyle.Short)
    .setRequired(false);

  modal.addComponents(
    new ActionRowBuilder<TextInputBuilder>().addComponents(codeInput),
    new ActionRowBuilder<TextInputBuilder>().addComponents(lineSpacing),
    new ActionRowBuilder<TextInputBuilder>().addComponents(showEnvironmentVariables),
  );

  await interaction.showModal(modal);
}

export default evalCommand;
