import type { ApplicationCommandRegistry, Awaitable } from "@sapphire/framework";

import { Subcommand } from "@sapphire/plugin-subcommands";

import balance from "src/commands/bank/_balance";
import createAccount from "src/commands/bank/_create-account";

class BankCommand extends Subcommand {
  public constructor(context: Subcommand.LoaderContext, options: Subcommand.Options) {
    super(context, {
      ...options,
      subcommands: [
        {
          name: "balance",
          chatInputRun: balance,
        },
        {
          name: "create-account",
          chatInputRun: createAccount,
        },
      ],
    });
  }

  public override registerApplicationCommands(
    registry: ApplicationCommandRegistry,
  ): Awaitable<void> {
    registry.registerChatInputCommand((builder) => {
      return builder
        .setName("bank")
        .setDescription("Interact with the in-server currency")
        .addSubcommand((command) => {
          return command.setName("balance").setDescription("Check your balance");
        })
        .addSubcommand((command) => {
          return command
            .setName("create-account")
            .setDescription("Create a bank account in the current server");
        });
    });
  }
}

export default BankCommand;
