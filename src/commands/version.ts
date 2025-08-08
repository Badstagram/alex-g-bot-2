import type { ApplicationCommandRegistry, Awaitable } from "@sapphire/framework";
import { Command } from "@sapphire/framework";
import type { ChatInputCommandInteraction } from "discord.js";
import { version } from "package.json";

class VersionCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, { ...options });
  }

  public override registerApplicationCommands(
    registry: ApplicationCommandRegistry,
  ): Awaitable<void> {
    registry.registerChatInputCommand((builder) => {
      return builder.setName("version").setDescription("Get the current version number of the bot");
    });
  }

  public override async chatInputRun(interaction: ChatInputCommandInteraction): Promise<void> {
    await interaction.reply(`Current version: ${version}`);
  }
}

export default VersionCommand;
