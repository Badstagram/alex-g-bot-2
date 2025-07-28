import type { ApplicationCommandRegistry, Awaitable } from "@sapphire/framework";
import { Subcommand } from "@sapphire/plugin-subcommands";
import type { ChatInputCommandInteraction } from "discord.js";
import { EmbedBuilder } from "discord.js";

class PackagesCommand extends Subcommand {
  constructor(context: Subcommand.LoaderContext, options: Subcommand.Options) {
    super(context, {
      ...options,
      subcommands: [
        {
          name: "github-links",
          chatInputRun: "chatInputGitHubLinks",
          default: true,
        },
      ],
    });
  }

  public override registerApplicationCommands(
    registry: ApplicationCommandRegistry,
  ): Awaitable<void> {
    registry.registerChatInputCommand((builder) => {
      return builder
        .setName("packages")
        .setDescription("Get links to NPM packages created by Alex")
        .addSubcommand((command) => {
          return command
            .setName("github-links")
            .setDescription("GitHub links to Alex's NPM packages");
        });
    });
  }

  public async chatInputGitHubLinks(interaction: ChatInputCommandInteraction): Promise<void> {
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
}

export default PackagesCommand;
