import type { ApplicationCommandRegistry, Awaitable } from "@sapphire/framework";
import { Subcommand } from "@sapphire/plugin-subcommands";
import type { ChatInputCommandInteraction } from "discord.js";

class OwnerCommand extends Subcommand {
  constructor(context: Subcommand.LoaderContext, options: Subcommand.Options) {
    super(context, {
      ...options,
      preconditions: ["OwnerOnly"],
      subcommands: [
        {
          name: "test",
          chatInputRun: "chatInputTest",
          default: true,
        },
      ],
    });
  }

  registerApplicationCommands(registry: ApplicationCommandRegistry): Awaitable<void> {
    registry.registerChatInputCommand((builder) => {
      return builder
        .setName("owner")
        .setDescription("Commands only the bot owner can run")
        .addSubcommand((command) => {
          return command
            .setName("test")
            .setDescription("Respond with a special message if run by the bot owner");
        });
    });
  }

  public async chatInputTest(interaction: ChatInputCommandInteraction): Promise<void> {
    await interaction.reply("Alex is the best user");
  }
}

export default OwnerCommand;
