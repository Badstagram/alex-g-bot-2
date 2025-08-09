import Type from "@sapphire/type";
import { ContainerBuilder, SeparatorSpacingSize } from "discord.js";

export interface Metadata {
  lineSpacing: number;
  success: boolean;
  showEnvironmentVariables: boolean;
}

function generateEvalOutputContainer(
  code: string,
  output: any,
  { lineSpacing, success, showEnvironmentVariables }: Metadata,
) {
  return new ContainerBuilder()
    .addTextDisplayComponents((builder) => {
      return builder.setContent(`## Eval`);
    })
    .addSeparatorComponents((builder) => {
      return builder.setSpacing(SeparatorSpacingSize.Large);
    })
    .addTextDisplayComponents((builder) => {
      return builder.setContent("## Input");
    })
    .addTextDisplayComponents((builder) => {
      return builder.setContent("```js\n" + code + "```");
    })
    .addSeparatorComponents((builder) => {
      return builder.setSpacing(SeparatorSpacingSize.Small);
    })
    .addTextDisplayComponents((builder) => {
      return builder.setContent("## Output");
    })
    .addTextDisplayComponents((builder) => {
      return builder.setContent("```js\n" + JSON.stringify(output, null, lineSpacing) + "```");
    })
    .addSeparatorComponents((builder) => {
      return builder.setSpacing(SeparatorSpacingSize.Small);
    })
    .addTextDisplayComponents((builder) => {
      return builder.setContent(
        `-# Output type: ${code.includes("process.env") && !showEnvironmentVariables ? "Rickroll" : new Type(output)} | Line spacing: ${lineSpacing} | Show environment variables: ${showEnvironmentVariables}`,
      );
    })
    .setAccentColor(success ? [0, 255, 0] : [255, 0, 0]);
}

export default generateEvalOutputContainer;
