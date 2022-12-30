import jss, { Styles, StyleSheetFactoryOptions, StyleSheet } from "jss";
import React, { useContext } from "react";
import jssPluginGlobal from "jss-plugin-global";
import jssPluginNested from "jss-plugin-nested";
import jssPluginCamelCase from "jss-plugin-camel-case";

jss.default.use(
  jssPluginGlobal.default(),
  jssPluginNested.default(),
  jssPluginCamelCase.default()
);

const context = React.createContext<{ registry: jss.SheetsRegistry | null }>({
  registry: null,
});
context.displayName = "CssContext";

export const CssProvider = context.Provider;

type CssHook<Name extends string | number | symbol> = {
  useCss(): StyleSheet<Name>;
};

export function createCssHook<Name extends string | number | symbol>(
  styles: Partial<Styles<Name, any, undefined>>,
  options?: StyleSheetFactoryOptions
): CssHook<Name> {
  const stylesheet = jss.default.createStyleSheet(styles, options);
  return {
    useCss: () => {
      const { registry } = useContext(context);
      if (registry === null) {
        throw new Error("Context is missing registry");
      }
      registry.add(stylesheet);
      return stylesheet;
    },
  };
}
