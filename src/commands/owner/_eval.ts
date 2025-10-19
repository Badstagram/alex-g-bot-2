import type { ChatInputCommandInteraction } from "discord.js";

import {
  LabelBuilder,
  ModalBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  TextInputBuilder,
  TextInputStyle,
} from "discord.js";

async function evalCommand(interaction: ChatInputCommandInteraction) {
  const modal = new ModalBuilder().setCustomId("eval").setTitle("Eval");

  const codeInput = new LabelBuilder()
    .setLabel("Enter your code here")
    .setTextInputComponent(
      new TextInputBuilder()
        .setRequired(true)
        .setCustomId("code")
        .setStyle(TextInputStyle.Paragraph),
    );

  const lineSpacing = new LabelBuilder()
    .setLabel("Line Spacing")
    .setStringSelectMenuComponent(
      new StringSelectMenuBuilder()
        .setCustomId("lineSpacing")
        .setOptions(
          new StringSelectMenuOptionBuilder().setLabel("1").setValue("1"),
          new StringSelectMenuOptionBuilder().setLabel("2").setValue("2"),
          new StringSelectMenuOptionBuilder().setLabel("3").setValue("3"),
          new StringSelectMenuOptionBuilder().setLabel("4").setValue("4").setDefault(true),
        ),
    );

  const showEnvironmentVariables = new LabelBuilder()
    .setLabel("Show Environment Variables")
    .setStringSelectMenuComponent(
      new StringSelectMenuBuilder()
        .setCustomId("showEnvironmentVariables")
        .setOptions(
          new StringSelectMenuOptionBuilder().setLabel("Yes").setValue("true"),
          new StringSelectMenuOptionBuilder().setLabel("No").setValue("false").setDefault(),
        ),
    );

  modal.addLabelComponents(codeInput, lineSpacing, showEnvironmentVariables);
  await interaction.showModal(modal);
}

export default evalCommand;
