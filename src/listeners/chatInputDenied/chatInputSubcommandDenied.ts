import type { UserError } from "@sapphire/framework";
import { Listener } from "@sapphire/framework";
import type { ChatInputSubcommandDeniedPayload } from "@sapphire/plugin-subcommands";
import denyChatInputCommand from "src/listeners/chatInputDenied/_deny-chat-input-command";

class ChatInputSubcommandDeniedListener extends Listener {
  public constructor(context: Listener.LoaderContext, options: Listener.Options) {
    super(context, {
      ...options,
      event: "chatInputSubcommandDenied",
    });
  }

  public override async run(error: UserError, { interaction }: ChatInputSubcommandDeniedPayload) {
    return await denyChatInputCommand(error, interaction);
  }
}

export default ChatInputSubcommandDeniedListener;
