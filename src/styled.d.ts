export * from "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    primaryRed: string;
    primaryWhite: string;
    primaryBlack: string;
    bg: string;
    hoverRed: string;
    hoverWhite: string;
    maxWidth: string;
    maxHeight: string;
  }
}
