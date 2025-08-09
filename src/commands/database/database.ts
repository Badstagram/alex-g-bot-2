import type { ApplicationCommandRegistry, Awaitable } from "@sapphire/framework";
import { Subcommand } from "@sapphire/plugin-subcommands";
import query from "src/commands/database/_query";

class DatabaseCommand extends Subcommand {
  constructor(context: Subcommand.LoaderContext, options: Subcommand.Options) {
    super(context, {
      ...options,
      preconditions: ["OwnerOnly"],
      subcommands: [
        {
          name: "query",
          chatInputRun: query,
        },
      ],
    });
  }

  public override registerApplicationCommands(
    registry: ApplicationCommandRegistry,
  ): Awaitable<void> {
    registry.registerChatInputCommand((builder) => {
      return builder
        .setName("database")
        .setDescription("Interact with the bot's database")
        .addSubcommand((command) => {
          return command
            .setName("query")
            .setDescription("Query the bot's database")
            .addStringOption((option) => {
              return option
                .setName("query")
                .setDescription("The SQL query to run")
                .setRequired(true);
            });
        });
    });
  }
}

export default DatabaseCommand;
