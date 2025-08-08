import type { ChatInputCommandInteraction } from "discord.js";
import { EmbedBuilder } from "discord.js";

async function gitHubLinks(interaction: ChatInputCommandInteraction) {
  const embed = new EmbedBuilder()
    .setTitle("GitHub Links to Alex's Packages")
    .setColor("Green")
    .addFields(
      { name: "@alextheman/components", value: "https://github.com/AlexMan123456/components" },
      { name: "@alextheman/utility", value: "https://github.com/AlexMan123456/utility" },
      {
        name: "@alextheman/eslint-plugin",
        value: "https://github.com/AlexMan123456/eslint-plugin",
      },
      { name: "AlexCLine", value: "https://github.com/AlexMan123456/alex-c-line" },
      { name: "Gitmock", value: "https://github.com/AlexMan123456/gitmock" },
      { name: "Dropcore", value: "https://github.com/AlexMan123456/dropcore" },
    );

  await interaction.reply({ embeds: [embed] });
}

export default gitHubLinks;
