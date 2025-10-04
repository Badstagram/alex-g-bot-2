import type { ApplicationCommandRegistry, Awaitable } from "@sapphire/framework";

import { Subcommand } from "@sapphire/plugin-subcommands";

import balance from "src/commands/bank/_balance";
import createAccount from "src/commands/bank/_create-account";
import transfer from "src/commands/bank/_transfer";

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
        {
          name: "transfer",
          chatInputRun: transfer,
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
        })
        .addSubcommand((command) => {
          return command
            .setName("transfer")
            .setDescription("Transfer money to another user")
            .addUserOption((option) => {
              return option
                .setName("payee")
                .setDescription("The person to transfer money too")
                .setRequired(true);
            })
            .addNumberOption((option) => {
              return option
                .setName("amount")
                .setDescription("The amount of money to transfer")
                .setRequired(true);
            });
        });
    });
  }
}

export default BankCommand;
