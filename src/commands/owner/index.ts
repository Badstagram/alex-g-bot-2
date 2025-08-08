import type { ApplicationCommandRegistry, Awaitable } from "@sapphire/framework";
import { Subcommand } from "@sapphire/plugin-subcommands";
import type { ChatInputCommandInteraction } from "discord.js";
import evalCommand from "src/commands/owner/_eval";
import ownerTestCommand from "src/commands/owner/_test";

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
        {
          name: "eval",
          chatInputRun: "chatInputEval",
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
        })
        .addSubcommand((command) => {
          return command.setName("eval").setDescription("Evaluate some JavaScript code");
        });
    });
  }

  public async chatInputTest(interaction: ChatInputCommandInteraction): Promise<void> {
    await ownerTestCommand(interaction);
  }

  public async chatInputEval(interaction: ChatInputCommandInteraction): Promise<void> {
    await evalCommand(interaction);
  }
}

export default OwnerCommand;
