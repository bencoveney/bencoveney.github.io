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
      /* Reset */
      "*": {
        margin: 0,
        padding: 0,
        listStyleType: "none",
        textDecoration: "none",
        color: "var(--fg-color)",
      },

      "html, body": {
        width: "100%",
        height: "100%",
        fontFamily: "var(--font-family)",
      },
    },
  });
}
