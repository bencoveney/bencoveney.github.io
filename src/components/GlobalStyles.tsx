import { createCssHook } from "../contexts/CssContext.js";
import { styles } from "./GlobalStyles.css.js";

const { useCss } = createCssHook(styles);
export function GlobalStyles() {
  useCss();
  return null;
}
