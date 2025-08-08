import { InteractionHandler, InteractionHandlerTypes } from "@sapphire/framework";
import type { ModalSubmitInteraction } from "discord.js";
import { MessageFlags } from "discord.js";
import evaluateCode from "src/interaction-handlers/evalModalHandler/_evaluate-code";
import generateEvalOutputContainer from "src/interaction-handlers/evalModalHandler/_generate-eval-output-container";

class EvalModalHandler extends InteractionHandler {
  public constructor(
    context: InteractionHandler.LoaderContext,
    options: InteractionHandler.Options,
  ) {
    super(context, {
      ...options,
      interactionHandlerType: InteractionHandlerTypes.ModalSubmit,
    });
  }

  public override parse(interaction: ModalSubmitInteraction) {
    if (interaction.customId === "eval") {
      return this.some();
    }
    return this.none();
  }

  public override async run(interaction: ModalSubmitInteraction) {
    const code = interaction.fields.getTextInputValue("code");
    const lineSpacing = interaction.fields.getTextInputValue("lineSpacing");
    const parsedLineSpacing = lineSpacing !== "" ? parseInt(lineSpacing) : 2;
    const showEnvironmentVariables = interaction.fields.getTextInputValue(
      "showEnvironmentVariables",
    );

    if (code.includes("process.env") && !showEnvironmentVariables) {
      const container = generateEvalOutputContainer(
        code,
        { BOT_TOKEN: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        parsedLineSpacing,
        false,
        !!showEnvironmentVariables,
      );
      await interaction.reply({ components: [container], flags: MessageFlags.IsComponentsV2 });
      return;
    }

    const { evaluatedCode, success } = evaluateCode(code);

    const container = generateEvalOutputContainer(
      code,
      evaluatedCode,
      parsedLineSpacing,
      success,
      !!showEnvironmentVariables,
    );

    await interaction.reply({ components: [container], flags: MessageFlags.IsComponentsV2 });
  }
}

export default EvalModalHandler;
