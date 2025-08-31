import type { ChatInputCommandErrorPayload, UserError } from "@sapphire/framework";

import { Listener } from "@sapphire/framework";

import logError from "src/listeners/chatInputError/_logError";

class ChatInputCommandErrorListener extends Listener {
  public constructor(context: Listener.LoaderContext, options: Listener.Options) {
    super(context, { ...options, event: "chatInputCommandError" });
  }

  public override async run(error: UserError, { interaction }: ChatInputCommandErrorPayload) {
    return await logError(interaction, error);
  }
}

export default ChatInputCommandErrorListener;
