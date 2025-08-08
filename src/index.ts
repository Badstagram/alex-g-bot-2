import { LogLevel, SapphireClient } from "@sapphire/framework";
import { GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const client = new SapphireClient({
  intents: [
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ],
  loadMessageCommandListeners: true,
  logger: {
    level: LogLevel.Debug,
  },
});

client.login(process.env.BOT_TOKEN);
