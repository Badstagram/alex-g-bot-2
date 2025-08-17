import type { ApplicationCommandRegistry, Awaitable } from "@sapphire/framework";
import type { ChatInputCommandInteraction } from "discord.js";

import { Command } from "@sapphire/framework";

class PingCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, { ...options });
  }

  public override registerApplicationCommands(
    registry: ApplicationCommandRegistry,
  ): Awaitable<void> {
    registry.registerChatInputCommand((builder) => {
      return builder.setName("ping").setDescription("Replies with pong");
    });
  }

  public override async chatInputRun(interaction: ChatInputCommandInteraction): Promise<void> {
    await interaction.reply("Pong!");
  }
}

export default PingCommand;
