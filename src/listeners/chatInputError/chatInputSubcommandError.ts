import type { UserError } from "@sapphire/framework";
import type { ChatInputSubcommandErrorPayload } from "@sapphire/plugin-subcommands";

import { Listener } from "@sapphire/framework";

import logError from "src/listeners/chatInputError/_logError";

class ChatInputCommandErrorListener extends Listener {
  public constructor(context: Listener.LoaderContext, options: Listener.Options) {
    super(context, { ...options, event: "chatInputSubcommandError" });
  }

  public override async run(error: UserError, { interaction }: ChatInputSubcommandErrorPayload) {
    return await logError(interaction, error);
  }
}

export default ChatInputCommandErrorListener;
