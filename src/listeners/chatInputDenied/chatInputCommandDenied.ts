import type { ChatInputCommandDeniedPayload, UserError } from "@sapphire/framework";

import { Listener } from "@sapphire/framework";

import denyChatInputCommand from "src/listeners/chatInputDenied/_deny-chat-input-command";

class ChatInputCommandDeniedListener extends Listener {
  public constructor(context: Listener.LoaderContext, options: Listener.Options) {
    super(context, {
      ...options,
      event: "chatInputCommandDenied",
    });
  }

  public override async run(error: UserError, { interaction }: ChatInputCommandDeniedPayload) {
    return await denyChatInputCommand(error, interaction);
  }
}

export default ChatInputCommandDeniedListener;
