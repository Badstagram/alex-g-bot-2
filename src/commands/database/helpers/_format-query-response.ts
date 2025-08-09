import { ContainerBuilder, SeparatorSpacingSize } from "discord.js";

export interface DatabaseQueryMetadata {
  success: boolean;
}

function formatQueryResponse(
  queryString: string,
  queryResponse: unknown,
  { success }: DatabaseQueryMetadata,
) {
  return new ContainerBuilder()
    .addTextDisplayComponents((builder) => {
      return builder.setContent(`## Database Query`);
    })
    .addSeparatorComponents((builder) => {
      return builder.setSpacing(SeparatorSpacingSize.Large);
    })
    .addTextDisplayComponents((builder) => {
      return builder.setContent("## Input");
    })
    .addTextDisplayComponents((builder) => {
      return builder.setContent("```js\n" + queryString + "```");
    })
    .addSeparatorComponents((builder) => {
      return builder.setSpacing(SeparatorSpacingSize.Small);
    })
    .addTextDisplayComponents((builder) => {
      return builder.setContent("## Output");
    })
    .addTextDisplayComponents((builder) => {
      return builder.setContent("```js\n" + JSON.stringify(queryResponse, null, 2) + "```");
    })
    .setAccentColor(success ? [0, 255, 0] : [255, 0, 0]);
}

export default formatQueryResponse;
