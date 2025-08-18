import type { ApplicationCommandRegistry, Awaitable } from "@sapphire/framework";

import { Subcommand } from "@sapphire/plugin-subcommands";

import addGuildCommand from "src/commands/database/_add-guild";
import addUserCommand from "src/commands/database/_add-user";
import query from "src/commands/database/_query";
import setErrorLogChannel from "src/commands/database/_set-error-log-channel";

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
        {
          name: "add-user",
          chatInputRun: addUserCommand,
        },
        {
          name: "add-guild",
          chatInputRun: addGuildCommand,
        },
        {
          name: "set-error-log-channel",
          chatInputRun: setErrorLogChannel,
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
        })
        .addSubcommand((command) => {
          return command
            .setName("add-user")
            .setDescription("Add a user to the bot's database")
            .addUserOption((option) => {
              return option.setName("user").setDescription("The user to add").setRequired(true);
            });
        })
        .addSubcommand((command) => {
          return command
            .setName("add-guild")
            .setDescription("Add the current guild to the bot's database");
        })
        .addSubcommand((command) => {
          return command
            .setName("set-error-log-channel")
            .setDescription("Set the channel to log bot errors in")
            .addChannelOption((option) => {
              return option
                .setName("channel")
                .setDescription("The channel to log errors in")
                .setRequired(true);
            });
        });
    });
  }
}

export default DatabaseCommand;
