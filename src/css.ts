import jss, { Styles, StyleSheetFactoryOptions, StyleSheet } from "jss";
import jssPluginGlobal from "jss-plugin-global";
import jssPluginNested from "jss-plugin-nested";
import jssPluginCamelCase from "jss-plugin-camel-case";

jss.default.use(
  jssPluginGlobal.default(),
  jssPluginNested.default(),
  jssPluginCamelCase.default()
);

export function css<Name extends string | number | symbol>(
  styles: Partial<Styles<Name, any, undefined>>,
  options?: StyleSheetFactoryOptions
): StyleSheet<Name> {
  const stylesheet = jss.default.createStyleSheet(styles, options);
  jss.sheets.add(stylesheet);
  return stylesheet;
}

export function joinClasses(...names: string[]) {
  return names.join(" ");
}

export function globalStyles() {
  css({
    "@global": {
      ":root": {
        "--font-family":
          "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif",
        "--font-family-mono":
          "Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace",
        "--fg-color": `rgb(50, 50, 50)`,
        "--highlight-color": "rgb(180, 20, 20)",
        "--bg-color-alternate": `rgba(220, 220, 220, 0.9)`,
      },

      /* Reset */
      "*": {
        margin: 0,
        padding: 0,
        listStyleType: "none",
        textDecoration: "none",
      },

      "html, body, a:link, a:visited, a:active, a:hover": {
        width: "100%",
        height: "100%",
        fontFamily: "var(--font-family)",
        color: "var(--fg-color)",
      },
    },
  });
}
