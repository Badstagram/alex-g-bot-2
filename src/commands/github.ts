import type { ApplicationCommandRegistry, Awaitable } from "@sapphire/framework";
import { Command } from "@sapphire/framework";
import type { ChatInputCommandInteraction } from "discord.js";

class GitHubLinkCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, { ...options });
  }

  public override registerApplicationCommands(
    registry: ApplicationCommandRegistry,
  ): Awaitable<void> {
    registry.registerChatInputCommand((builder) => {
      return builder
        .setName("github")
        .setDescription("Respond with GitHub repository link to bot source code");
    });
  }

  public override async chatInputRun(interaction: ChatInputCommandInteraction): Promise<void> {
    await interaction.reply(
      "Here's the GitHub repository link to my source code: https://github.com/AlexMan123456/alex-g-bot-2",
    );
  }
}

export default GitHubLinkCommand;
