import type { ChatInputCommandInteraction } from "discord.js";
import addUserToDatabase from "src/database-helpers/add-user-to-database";

async function addUserCommand(interaction: ChatInputCommandInteraction) {
  const userToAdd = interaction.options.getUser("user", true);
  try {
    await addUserToDatabase(userToAdd);
    await interaction.reply(`${userToAdd.globalName} has been added to the database.`);
  } catch {
    await interaction.reply(`Could not add ${userToAdd.globalName} to database.`);
  }
}

export default addUserCommand;
