import type { ApplicationCommandRegistry, Awaitable } from "@sapphire/framework";
import { Subcommand } from "@sapphire/plugin-subcommands";

import gitHubLinks from "src/commands/packages/_github-links";

class PackagesCommand extends Subcommand {
  constructor(context: Subcommand.LoaderContext, options: Subcommand.Options) {
    super(context, {
      ...options,
      subcommands: [
        {
          name: "github-links",
          chatInputRun: gitHubLinks,
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
}

export default PackagesCommand;
